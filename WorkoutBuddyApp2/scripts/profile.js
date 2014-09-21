/**
 * Users model
 */

var app = app || {};
var el = el || {};

app.Profile = (function () {
    'use strict';

    var profileModel = (function () {

        var init = function () {
        };
        
        var show = function () {
            if (app.Users.currentUser.data == null) {
                app.returnView = "views/profile.html";
                app.mobileApp.navigate("views/welcome.html");
            } else {
                return;
            }
        };

        return {
            init: init,
            show: show
        };

    }());

    return profileModel;

}());
