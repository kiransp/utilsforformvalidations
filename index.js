exports.isValidEmail = function (email) {
  let regex =
    /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidFirstName = function (param) {
  let regex = /^(?=.{1,50}$)[a-zA-Z ]+(?:['_.\\s][a-zA-Z]+)*$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

//validation check for last name and company name
exports.isValidLastName = function (param) {
  let regex = /^(?=.{1,50}$)[a-zA-Z ]+(?:['_.\\s][a-zA-Z]+)*$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidDesignation = function (param) {
  let regex = /^(?=.{1,50}$)[a-zA-Z ]+(?:['_.\\s][a-zA-Z]+)*$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidLinkedInProfile = function (param) {
  let regex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  if (!regex.test(param) || !param.toLowerCase().includes("linkedin")) {
    return false;
  } else {
    return true;
  }
};
// validation check for additional details, landmark and about user
exports.isValidAddress = function (param) {
  let regex = /^[\\.0-9a-zA-Z\s,\- ]+$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

//validation check for houseNo
exports.isValidHouseNo = function (param) {
  let regex = /^[\\.0-9a-zA-Z\s,\- ]+$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidCity = function (param) {
  let regex = /^[a-zA-Z\\s\ ]+$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidpincode = function (param) {
  let regex = /^[1-9][0-9]{5}$/;
  if (!regex.test(param)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidBio = function (params) {
  let regex = /^[\.0-9a-zA-Z\s\,\-\ ]+$/;
  if (!regex.test(params)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidMobileNo = function (params) {
  if (typeof params !== "string") {
    params = params.toString();
  }
  let regex = /^[6-9][0-9]{9}$/;
  if (params.includes("XXXXXX")) {
    return true;
  } else if (!regex.test(params)) {
    return false;
  } else {
    return true;
  }
};

exports.isValidPassword = function (params) {
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!regex.test(params)) {
    return false;
  } else {
    return true;
  }
};

exports.getDateDiff = function (modified_at) {
  const modified_date = new Date(modified_at);
  const current_date = new Date();
  var diff = (modified_date.getTime() - current_date.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  return Math.abs(Math.round(diff));
};
