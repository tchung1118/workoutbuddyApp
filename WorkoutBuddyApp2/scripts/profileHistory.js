/**
 * Users model
 */

var app = app || {};
var el = el || {};

app.ProfileHistory = (function () {
    'use strict';

    var profileHistoryModel = (function () {

        var init = function () {
        };
        
        
        var show = function () {
           
        };
        
        var verifyLogin = function(e) {
            if (app.Users.currentUser.data == null) {
                app.returnView = "views/mains/profileStats.html";
                e.preventDefault();
                app.mobileApp.navigate("views/mains/welcome.html");
            }
        };

        return {
            init: init,
            show: show,
            verifyLogin: verifyLogin
        };

    }());

    return profileHistoryModel;

}());
