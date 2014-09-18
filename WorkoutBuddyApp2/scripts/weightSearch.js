var app = app || {};
var el = el || {};

app.WeightSearch = (function () {
    'use strict'

    var weightSearchModel = (function () {
        
        var date, stime, etime, dur, primBP;
        //var validators;
        var searchRequest;
        var roomList;
        var init = function () {
            
            date = $('#weightDate');
            stime = $('#weightTimeFrom');
            etime = $('#weightTimeTo');
            dur = $('#weightDuration');
            primBP = $('#weightPrimary');
            searchRequest = {
            	date: date,
            	stime: stime,
            	dur: dur,
            	primBP: primBP,
                etime: etime
        	};
            app.WeightSearch.searchRequest = searchRequest;
            
            /*
            validator = $('#enterStatus').kendoValidator().data('kendoValidator');
            $newStatus = $('#newStatus');*/
        };
        
        var show = function () {
            /*
            var now = new Date();
			var day = ("0" + now.getDate()).slice(-2);
			var month = ("0" + (now.getMonth() + 1)).slice(-2);
			var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
			date.val(today);*/
        };
        
        var search = function() {
        	var req = searchRequest;
            var rooms = el.data("WorkoutRooms");
            var query = new Everlive.Query();
            var dstring = req.date.val();
            dstring = "D"+dstring;
            //alert(req.stime.val());
            query.where().and().eq('Type', 'Weight').eq('PrimaryBodyPart', req.primBP.val()).eq('Date',dstring);
            rooms.get(query) // filter
    			.then(app.WeightSearchResults.roomscb,
    			function(error){
        			alert(JSON.stringify(error));
    			});
            roomList = rooms;
        };
        
        return {
            init: init,
            show: show,
            search: search,
            roomList: roomList
        };
        
    }());
    
    return weightSearchModel;
    
}());