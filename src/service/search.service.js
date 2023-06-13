export const getResponse = async (req) => {
    return " get response is from service layer"
}

export const postResponse = async (req) => {
    return " post response is from service layer"
}
export const putResponse = async (req) => {
    return " put response is from service layer"
}
export const deleteResponse = async (req) => {
    return " delete response is from service layer"
}


import { createjwtToken } from "../common/Authorization.js"
//***************************new addition of authorization with middleware************/
export const loginStudent = async (req) => {
    console.log("we are in search controller33");
    // const payload = {
    //     email: req.body.email
    // };
    console.log("we are in search controller44");
    if (req.body.email == "prashant@gmail.com" && req.body.pass == "123456") {
        console.log("we are in search controller55");
        var token = createjwtToken(payload);
        return {
            Message: "Login Successful",
            Token: token,
        };
    } else {
        return "Invalid user name or password";
    }
};