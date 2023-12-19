const db = require("../models");
const ApiHelper = require("../helpers/ApiHelper");
var bcrypt = require("bcryptjs");
var fs = require('fs');
const User = db.User;
const Op = db.Sequelize.Op;

//Here get all users
async function getAll(req, res) {
    const { page, size, search, role } = req.query;
    const { limit, offset } = ApiHelper.getPagination(page, size);
    var searchValue = search ? search : '';
    var roleValue = role ? role : '3';
    const Users = await User.findAndCountAll({
        where: {
            roleId: roleValue,
            [Op.or]: [
                { firstName: { [Op.like]: `%${searchValue}%` } },
                { lastName: { [Op.like]: `%${searchValue}%` } },
                { email: { [Op.like]: `%${searchValue}%` } },
                { mobileNumber: { [Op.like]: `%${searchValue}%` } }
            ],
        },
        order: [
            ['id', 'DESC'],
        ],
        limit,
        offset
    });
    //console.warn(Users.rows);
    // Users.rows.forEach(UserData => {
    //     if (UserData.status == '1') {
    //         UserData.status = "Activate"
    //     } else if (UserData.status == '2') {
    //         UserData.status = "Deactivate"
    //     }
    // });
    const response = ApiHelper.getPagingData(Users, page, limit);
    return response;
}


//Here create/update user
async function createUpdate(req, res) {
    const sequelize = ApiHelper.getSequelize();
    const transaction = await sequelize.transaction();
    try {
        // Here prepare store data
        const user = {
            roleId       :  '3',
            firstName    :  req.body.firstName,
            lastName     :  req.body.lastName,
            mobileNumber :  req.body.mobileNumber,
            email        :  req.body.email,
            password     :  bcrypt.hashSync(req.body.password, 8),
            address      :  req.body.address,
            countryId    :  req.body.countryId,
            stateId      :  req.body.stateId,
            cityId       :  req.body.cityId,
            companyName  :  req.body.companyName,
            panNumber    :  req.body.panNumber,
            businessType :  req.body.businessType,
            gstNumber    :  req.body.gstNumber,
            website      :  req.body.website,
            status       :  req.body.status ? req.body.status : 1,
            
        };
        
        if(req.params && req.params.id){
            const id = req.params.id;
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            }
            updateUser = await User.update(user, {
                where: { id: id }
            })
            await transaction.commit();
            return updateUser;
        }else{
            const createUser = User.create(user)
            await transaction.commit();
            return createUser;
        }
    } catch (error) {
        await transaction.rollback();
        return [];
    }
}


//Get user using id
async function get(req, res) {
    const id = req.params.id;
    user = await User.findByPk(id);
    if (user) {
        return user;
    } else {
        return [];
    }
}

//Here destory user using id
async function destroy(req, res) {
    const id = req.params.id;
    result = await User.destroy({
        where: { id : id }
    })
    return result;
}

//Here activate/deactivate user using id
async function activateUser(req, res) {
    try {
        const userId = req.body.userId;
        const userData = await User.findOne({
            where: {
                userId : userId,
            },
        });
        if (userData) {
            const user = {
                status: req.body.status,
            };
            updateUserData = await User.update(user, {
                where: { userId: userId }
            })
            return updateUserData;
        } else {
            return []
        }
    } catch (error) {
        return []
    }
}

//Here update profile using id
async function updateProfile(req, res) {
    const userId = req.userId;
    const sendUserData = {
        firstName   : req.body.firstName,
        lastName    : req.body.lastName,
        email       : req.body.email,
        phone       : req.body.phone,
    }
    var name = req.body.fileName;
    var img  = req.body.base64Image;
    if(img){
        var realFile = Buffer.from(img,"base64");
        fs.writeFile('public/'+name, realFile, function(err) {
        if(err)
            console.log("err"+err)
        }); 
    }
    if(name){
        sendUserData.profileImage = 'http://ec2-3-216-80-17.compute-1.amazonaws.com:3000/public/'+name;
    }
    
    updateUserData = await User.update(sendUserData, {
        where: { userId : userId }
    });

    if (updateUserData == 1) {
        getUserData = await User.findOne({
            where: { userId : userId }
        })
        return getUserData
    } else {
        return false;
    }
}

//Here change password using id
async function changePassword(req, res) {
    //try{
    var status = ''
    const userId = req.userId;
    const userData = await User.findOne({
        where: {
            userId: userId,
        },
    });
    var passwordIsValid = bcrypt.compareSync(
        req.body.old_password,
        userData.password
    );
    if (passwordIsValid) {
        const updateData = {
            password: bcrypt.hashSync(req.body.new_password, 8)
        }
        updateUserData = await User.update(updateData, {
            where: { userId: userId }
        })
        return passwordIsValid
    } else {
        return passwordIsValid
    }
}


UserProvider = {
    getAll          :  getAll,
    createUpdate    :  createUpdate,
    get             :  get,
    destroy         :  destroy,
    activateUser    :  activateUser,
    updateProfile   :  updateProfile,
    changePassword  :  changePassword,
}
module.exports = UserProvider;