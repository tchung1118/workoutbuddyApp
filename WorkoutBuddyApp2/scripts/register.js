var app = app || {};
var el = el || {};

app.Register = (function () {
    'use strict'

    var registerModel = (function () {
        var fname, lname, uname, pw, pwrepeat, email, domain, gender;
        var dataSource;
        
        var init = function () {
            fname=$('#firstname');
            lname=$('#lastname');
            uname=$('#username');
            pw=$('#password');
            pwrepeat=$('#passwordRepeat');
            email=$('#email-id');
            domain=$('#email-domain');
            gender=$('#gender');
        };
        
        var show = function () {
            fname.val('');
            lname.val('');
            uname.val('');
            pw.val('');
            pwrepeat.val('');
            email.val('');
            gender.val('0');
            dataSource = kendo.observable({
                Username: '',
                Password: '',
                DisplayName: '',
                Email: '',
                Gender: '0',
                Friends: []
            });
        };
        
        
        var validateFields = function() {
            if (pw.val() != pwrepeat.val()) {
                alert ("Passwords do not match!")
                return false;
            }
            
            if (gender.val() == "0") {
                alert("You have to select your gender!");
                return false;
            }
            
            return true;
        };
        
        var register = function () {
            var flag = validateFields();
            if (flag) {
                dataSource.Username=uname.val();
                dataSource.Password=pw.val();
                dataSource.DisplayName=fname.val()+" "+lname.val();
                dataSource.Email=email.val()+"@"+domain.val();
                dataSource.Gender=parseInt(gender.val());
                el.Users.register(dataSource.Username, dataSource.Password, dataSource,
                                 function (data) {
                                    alert("Registration successful");
                                    app.mobileApp.navigate('views/welcome.html');
                                },
                                function(error){
                                    alert(JSON.stringify(error));
                                });
            } else {
                return;
            }
            
        };

        return {
            init: init,
            show: show,
            register: register
        };
        
    }());
    
    return registerModel;
    
}());