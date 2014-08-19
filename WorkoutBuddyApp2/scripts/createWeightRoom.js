var app = app || {};
var el = el || {};

app.CreateWeightRoom = (function () {
    'use strict'

    var createWeightRoomModel = (function () {
        
        var date, stime, etime, dur, primBP, secBP;
        var init = function () {
            
            date = $('#cr_weightDate');
            stime = $('#cr_weightTimeFrom');
            etime = $('#cr_weightTimeTo');
            dur = $('#cr_weightDuration');
            primBP = $('#cr_weightPrimary');
            secBP = $('#cr_weightSecondary');
            
            /*
            validator = $('#enterStatus').kendoValidator().data('kendoValidator');
            $newStatus = $('#newStatus');*/
        };
        
        var show = function () {
			date.val(app.WeightSearch.searchRequest.date.val());
            stime.val(app.WeightSearch.searchRequest.stime.val());
            etime.val(app.WeightSearch.searchRequest.etime.val());
            dur.val(app.WeightSearch.searchRequest.dur.val());
            primBP.val(app.WeightSearch.searchRequest.primBP.val());
        };
        
        var create = function () {
            var data = el.data("WorkoutRooms");
            data.create({'Type': 'Weight',
                         'StartTime': stime.val(),
                         'EndTime': etime.val(),
                         'Duration': dur.val(),
                         'PrimaryBodyPart': primBP.val(),
                         'Date': "D"+date.val()
                        },
    			function(data){
        			alert(JSON.stringify(data));
    			},
    			function(error){
        			alert(JSON.stringify(error));
    			});
        }
        
        return {
            init: init,
            show: show,
            create: create
        };
        
    }());
    
    return createWeightRoomModel;
    
}());