Template.Alert.events({
	'click .fa-trash': function() {
		Meteor.call('deleteAlert', this._id)
	}
})