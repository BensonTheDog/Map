Meteor.subscribe('Alerts');

Template.Alerts.helpers({
	Alerts: ()=> {
		return Alerts.find({})
	}
});