function initMap(){
    var walmart1 = {lat:30.377100, lng: -91.062088}
    var walmart2 = {lat:30.409069 , lng:-91.021408 }
    var walmart3 = {lat:30.437401 , lng:-91.006798 }

    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 13,
        center: (walmart1,walmart2,walmart3)
    });

    var maker = new google.maps.Marker({
        position:(walmart1,walmart2,walmart3),
        map: map    
    });

}