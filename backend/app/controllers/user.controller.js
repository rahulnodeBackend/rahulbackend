const ApiHelper = require("../helpers/ApiHelper")
const UserProvider = require("../providers/User.Provider");

// Get all users
exports.getAll = async (req, res) => {
  users = await UserProvider.getAll(req, res);
  if (users.length != 0) {
    return ApiHelper.successError(res, 200, "Record Found", users);
  } else {
    return ApiHelper.successError(res, 404, 'Record not found', []);
  }
};

//Create user
exports.create = async (req, res) => {
  createUser = await UserProvider.createUpdate(req, res);
  if (createUser) {
    return ApiHelper.successError(res, 200, "User added successfully", createUser);
  } else {
    return ApiHelper.successError(res, 500, "User added failed please try again", []);
  }
};


//Get user using id
exports.get = async (req, res) => {
  user = await UserProvider.get(req, res);
  if (user) {
    return ApiHelper.successError(res, 200, "Record found", user);
  } else {
    return ApiHelper.successError(res, 404, "Record not found", []);
  }
};

//Here update user using id
exports.update = async (req, res) => {
  result = await UserProvider.createUpdate(req, res);
  if (result) {
    return ApiHelper.successError(res, 200, "User updated successfully", result);
  } else {
    return ApiHelper.successError(res, 200, "User updated failed please try again", []);
  }
};

//Here delete user using id
exports.destroy = async (req, res) => {
  result = await UserProvider.destroy(req, res);
  if (result) {
    if (result == 1) {
      return ApiHelper.successError(res, 200, "User deleted successfully!", result);
    } else {
      return ApiHelper.successError(res, 201, "User deleted failed,Please tray agin!", result);
    }
  } else {
    return ApiHelper.successError(res, 500, "User deleted failed,Please tray agin!", []);
  }
};

//Here update profile using id
exports.updateProfile = async (req, res) => {
  result = await UserProvider.updateProfile(req, res);
  if (result) {
    return ApiHelper.successError(res, 200, "Profile updated successfully", result);
  } else {
    return ApiHelper.successError(res, 200, "Profile updated failed please try again", []);
  }
};


//Here activate/deactivate user using id
exports.activateUser = async (req, res) => {
  result = await UserProvider.activateUser(req, res);
  if (result) {
    if (req.body.status == '1') {
      return ApiHelper.successError(res, 200, "User activate successfully!", result);
    } else if (req.body.status == '2') {
      return ApiHelper.successError(res, 200, "User inctivate successfully!", result);
    } else {
      return ApiHelper.successError(res, 200, "User status invalid!", result);
    }
  } else {
    return ApiHelper.successError(res, 500, "Some server issue, Please tray agin!", []);
  }
};

//Here change password using id
exports.changePassword = async (req, res) => {
  result = await UserProvider.changePassword(req, res);
  if (result) {
    return ApiHelper.successError(res, 200, "Password change successfully");
  } else {
    return ApiHelper.successError(res, 500, "Your old password does not match your currnet password",);
  }
};

