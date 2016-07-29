Template.NewAlert.onCreated(function(){
    Session.set('lat');
    Session.set('lng');
});


Template.NewAlert.events({
    'click .fa-close': function() {
        Session.set('newAlert', false);
    }
});



Template.NewAlert.helpers({
    lat: () => {
        return Session.get('lat');
    },
    lng: () => {
        return Session.get('lng');
    }
});


var preHooks = {
   before: {
       insert: (alert)=> {
           console.log('Session lat, lng: ' + Session.get('lat')  +','+ Session.get('lng'));
           console.log(alert);
           alert.LatLng = {};
           alert.LatLng.lat = Session.get('lat');
           alert.LatLng.lng = Session.get('lng');
           console.log(alert);
           return alert; 
       }
   },
    
    onSubmit: function (insertDoc, updateDoc, currentDoc)  { 
                insertDoc.desc =Session.get('lat') + insertDoc.desc;
            console.log('on before' + insertDoc.desc);
            this.done();
            //return false;
    },
    onError: function(name, error, template) {
          console.log(name + " error:", error);
    }
};

AutoForm.addHooks('insertAlertForm', preHooks);