Meteor.publish('Alerts', function(){
	return Alerts.find({author: this.userId});
});