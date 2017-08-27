// document.addEventListener("DOMContentLoaded", function(e) { 
//     //do work
//     ymaps.ready(init);
//     var myMap;

//     function init(){     
//         myMap = new ymaps.Map("map", {
//             center: [55.76, 37.64],
//             zoom: 7
//         });
//     }
//   });

var marker = {
    iconLayout: 'default#image',
    iconImageHref: './img/map-marker.png',
    iconImageSize: [46, 57],
    iconImageOffset: [-23, -57]
  }

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', { //state
        center: [55.18293715, 61.47195254],
        zoom: 5,        
        controls: []
    }, {//option
        maxZoom: 7
    });    
        
    // custom button
    var button1 = new ymaps.control.Button({
        data: {
            content: 'Просто кнопка'
        },
        options: {
            layout: 'round#buttonLayout',
            maxWidth: 200
        }
    });
    myMap.controls.add(button1);

    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            layout: 'round#buttonLayout'
        }
    });
    myMap.controls.add(geolocationControl);
    var rulerControl = new ymaps.control.RulerControl({
        options: {
            layout: 'round#rulerLayout'
        }
    });
    myMap.controls.add(rulerControl);
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            layout: 'round#zoomLayout'
        }
    });
    myMap.controls.add(zoomControl);
    var typeSelector = new ymaps.control.TypeSelector({
        options: {
            layout: 'round#listBoxLayout',
            itemLayout: 'round#listBoxItemLayout',
            itemSelectableLayout: 'round#listBoxItemSelectableLayout',
            float: 'none',
            position: {
                bottom: '40px',
                left: '10px'
            }
        }
    });
    myMap.controls.add(typeSelector);

    myPlacemark0 = new ymaps.Placemark([56.85329872, 60.60549144], {           
        hintContent: 'Екатеринбург', 
        balloonContent: 'Столица России' 
      },marker);

    myMap.geoObjects.add(myPlacemark0); 

});