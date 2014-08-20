var app = app || {};

app.WeightSearchResults = (function () {
    'use strict'

    var weightSearchResultsModel = (function () {
        
        var listds =  new kendo.data.DataSource([]);
        var init = function () {
        };
        
        var show = function () {
        };
        var isOverlapping = function (reqStime, reqEtime, roomStime, roomEtime) {
            //write logic for time
            return true;
		};
        var roomsCallBack = function (data) {
            var rooms = new Array();
            var i;
            var req = app.WeightSearch.searchRequest;
            for (i = 0; i < data.result.length; i++) {
                var obj = data.result[i];
                if (isOverlapping(req.stime, req.etime, obj.StartTime, obj.EndTime)) {
                	rooms.push({
                    	PrimaryBodyPart: obj.PrimaryBodyPart,
                    	WorkoutDate: obj.Date.slice(1,11),
                    	StartTime: obj.StartTime,
                    	EndTime: obj.EndTime
                	});
                }
            }
            //alert(JSON.stringify(rooms));
            listds.data(rooms);
        };
        
        var enterRoom = function () {
        }
        
        return {
            init: init,
            show: show,
            roomscb: roomsCallBack,
            listds: listds
        };
        
    }());
    
    return weightSearchResultsModel;
    
}());
