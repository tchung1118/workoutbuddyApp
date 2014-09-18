/**
 * Users model
 */

var app = app || {};
var el = el || {};

app.Users = (function () {
    'use strict';

    var usersModel = (function () {

        var currentUser = kendo.observable({ data: null });
        var usersData;

        // Retrieve current user and all users data from Backend Services
        var loadUsers = function () {

            // Get the data about the currently logged in user
            return el.Users.currentUser()
            .then(function (data) {

                var currentUserData = data.result;
                currentUser.set('data', currentUserData);

                // Get the data about all registered users
                return el.Users.get();
            })
            .then(function (data) {

                usersData = new kendo.data.ObservableArray(data.result);
            })
            .then(null,
                  function (err) {
                      alert(err.message);
                  }
            );
        };

        return {
            load: loadUsers,
            users: function () {
                return usersData;
            },
            currentUser: currentUser
        };

    }());

    return usersModel;

}());
