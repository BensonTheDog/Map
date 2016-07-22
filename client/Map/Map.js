  
Template.maps.rendered = function() {
 
    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
};