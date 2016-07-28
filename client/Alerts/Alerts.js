Meteor.subscribe('Alerts');

Template.Alerts.helpers({
	Alerts: ()=> {
		return Alerts.find({})
	}
});

// Template.Alerts.rendered = function () {
// 	$(window).resize(); // trigger resize event 
// };