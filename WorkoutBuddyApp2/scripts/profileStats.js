/**
 * Users model
 */

var app = app || {};
var el = el || {};

app.ProfileStats = (function () {
    'use strict';

    var profileStatsModel = (function () {

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

    return profileStatsModel;

}());
