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
            var rsHr = parseInt(reqStime.slice(0,2)), rsMin = parseInt(reqStime.slice(-2));
            var reHr = parseInt(reqEtime.slice(0,2)), reMin = parseInt(reqEtime.slice(-2));
            var rsTime = rsHr + rsMin/60;
            var reTime = reHr + reMin/60;
            var rosHr = parseInt(roomStime.slice(0,2)), rosMin = parseInt(roomStime.slice(-2));
            var roeHr = parseInt(roomEtime.slice(0,2)), roeMin = parseInt(roomEtime.slice(-2));
            var rosTime = rosHr + rosMin/60;
            var roeTime = roeHr + roeMin/60;
            if (isNaN(rsTime)) {
            	rsTime = 0;
            }
            if (isNaN(reTime)) {
            	reTime = 24;
            }
            if (reTime >= rosTime && reTime <= roeTime) {
                return true;
            }
            if (rsTime >= rosTime && rsTime <= roeTime) {
            	return true;
            }
            if (rsTime <= rosTime && reTime >= roeTime) {
            	return true;
            }
            return false;
		};
        var roomsCallBack = function (data) {
            var rooms = new Array();
            var i;
            var req = app.WeightSearch.searchRequest;
            for (i = 0; i < data.result.length; i++) {
                var obj = data.result[i];
                if (isOverlapping(req.stime.val(), req.etime.val(), obj.StartTime, obj.EndTime)) {
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
        
        var enterRoom = function (e) {
            app.WeightSearchResults.roomData = e.dataItem;
            //alert(JSON.stringify(app.WeightSearchResults.roomData));
        }
        
        return {
            init: init,
            show: show,
            roomscb: roomsCallBack,
            enterRoom: enterRoom,
            listds: listds
        };
        
    }());
    
    return weightSearchResultsModel;
    
}());
