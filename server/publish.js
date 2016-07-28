Meteor.publish('Alerts', function(){
	return Alerts.find({author: this.userId});
});

// marker collection
var Markers = new Meteor.Collection('markers');
Meteor.publish("markers", function () {
  return Markers.find();
});

// Listen to incoming HTTP requests, can only be used on the server
WebApp.connectHandlers.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});


 //Markers.allow gives permission for Markers.insert to take places
Markers.allow({
	'insert': function(userId, doc) {

		console.log("Doc:"+ doc);
		return !!userId;
	},
	
	remove: function(userId, doc){
// return!!userId lets "delete" happen if this user has an ID
		return !!userId;
	},


}); 


