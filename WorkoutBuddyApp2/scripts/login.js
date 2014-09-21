var app = app || {};
var el = el || {};

app.Login = (function () {
    'use strict'

    var loginModel = (function () {
        var $loginUsername;
        var $loginPassword;
        var init = function () {
            $loginUsername = $('#loginUsername');
            $loginPassword = $('#loginPassword');
        };
        
        var show = function () {
            $loginUsername.val('');
            $loginPassword.val('');
        };
        
        var login = function () {
            var username = $loginUsername.val();
            var password = $loginPassword.val();
            

            // Authenticate using the username and password
            el.Users.login(username, password)
            .then(function () {
                // EQATEC analytics monitor - track login type
                /*
                if (isAnalytics) {
                    analytics.TrackFeature('Login.Regular');
                }*/
                
                return app.Users.load();
            })
            .then(function () {
                app.mobileApp.replace(app.returnView);
            })
            .then(null,
                  function (err) {
                      alert(err.message);
                  }
            );
        };
        
        return {
            init: init,
            show: show,
            login: login
        };
        
    }());
    
    return loginModel;
    
}());