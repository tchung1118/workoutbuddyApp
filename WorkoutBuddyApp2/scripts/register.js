var app = app || {};
var el = el || {};

app.Register = (function () {
    'use strict'

    var registerModel = (function () {
        var fname, lname, uname, pw, pwrepeat, email, domain, gender;
        
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
            dataSource = kendo.observable({
                Username: '',
                Password: '',
                DisplayName: '',
                Email: '',
                Gender: '0',
                Friends: []
            });
        };
        
        var validateFields() {
            var allUsers = el.Users.get();
            alert(JSON.stringify(allUsers));
            return true;
        }
        
        var register = function () {
            if (validateFields()) {
                dataSource.Username=uname.val();
                dataSource.Password=pw.val();
                dataSource.DisplayName=fname.val()+" "+lname.val();
                dataSource.Email=email.val()+"@"+domain.val();
                dataSource.Gender=parseInt(gender.val());
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