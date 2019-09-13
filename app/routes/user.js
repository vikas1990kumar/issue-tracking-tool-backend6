const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/all`, auth.isAuthorized, userController.getAllIssue);


    // params: userId.
   // app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

   app.get(`${baseUrl}/:receiverName/details`, auth.isAuthorized, userController.getSingleUser);

   app.get(`${baseUrl}/:issueId`, auth.isAuthorized, userController.getSingleIssue);

   app.get(`${baseUrl}/:issueData/search`, auth.isAuthorized, userController.getSingleSearch);

   app.get(`${baseUrl}/:issueId/commentDetails`, auth.isAuthorized, userController.getComments);

   
    // params: firstName, lastName, email, mobileNumber, password, apiKey.
    app.post(`${baseUrl}/signup`, auth.isAuthorized, userController.signUpFunction);

    app.post(`${baseUrl}/create`, auth.isAuthorized, userController.createIssue);

    app.post(`${baseUrl}/comment`, auth.isAuthorized, userController.createComment);

    




   

    app.post(`${baseUrl}/login`, auth.isAuthorized, userController.loginFunction);

    app.put(`${baseUrl}/:issueId/edit`, auth.isAuthorized, userController.editIssue);

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

}
