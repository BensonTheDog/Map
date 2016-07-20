Alerts = new Mongo.Collection('Alerts');

Alerts.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Officer = new SimpleSchema({
	name: {
		type: String,
		label: "Officer Name"
	},
	number:{
		type: String,
		label: "Badge Number"
	},
});


AlertSchema = new SimpleSchema({
	level: {
		type: String,
		label: "Risk Level",
		allowedValues: ["Low", "Medium", "High", "Dangerous"]
	},
	local:{
		type: String,
		label: "Location",
		allowedValues: ["North Hall", "South Hall", "East Hall", "West Hall"]
	},

	officer: {
		type: [Officer],
	},
	author:{
		type: "Author",
		autoValue: function(){
			return this.userId
		},
        autoform: {
            type: "hidden"
        }
	},

});

Alerts.attachSchema ( AlertSchema )








