Template.NewAlert.onCreated(function(){
    this.lat = new ReactiveVar(1000);
    this.lng = new ReactiveVar(-1000);
    this.lat.set(1000);
    this.lng.set(-1000);

    Session.set('lat', 1000);
    Session.set('lng', -1000);
});


Template.NewAlert.events({
    'click .fa-close': function() {
        Session.set('newAlert', false);
    }
});


Template.NewAlert.helpers({
    lat: () => {
        return Template.instance().lat.get();
    },
    lng: () => {
        return Template.instance().lng.get();
    }


});


var preHooks = {
   before: {
       insert: (alert)=> {
           console.log('old Description: ' + alert.desc );
           alert.desc = Session.get('lat') +' [' + alert.desc +']';
           console.log('new Description: ' + alert.desc );
           return alert; 
       }
   }
//    ,
    // onSubmit: function (insertDoc, updateDoc, currentDoc)  { 
    //             insertDoc.desc =Session.get('lat') + insertDoc.desc;
    //         console.log('on before' + insertDoc.desc);
    //         this.done();
    //         //return false;
    // },
    // onError: function(name, error, template) {
    //       console.log(name + " error:", error);
    // }
};

AutoForm.addHooks('insertAlertForm', preHooks);