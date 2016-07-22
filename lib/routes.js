

FlowRouter.route('/', {
	name: 'home', 
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/Alerts', {
	name: 'Alerts', 
	action() {
		BlazeLayout.render('MainLayout', {main: 'Alerts'});
	}
});

FlowRouter.route('/map', {
	name: 'map',
	action(){
		BlazeLayout.render('MainLayout', {main: 'maps'});
	}
});

