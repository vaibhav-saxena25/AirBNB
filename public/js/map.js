
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
    
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: coordinates, // starting position [lng, lat]
        zoom:9  // starting zoom
    });
    // console.log(coordinates);
    const marker1 = new mapboxgl.Marker({color:'red'})
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<p>Location provided after booking</p>`))
    .addTo(map);
    
  




   
	// mapboxgl.accessToken = mapToken;
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/streets-v12',
    //     center: [ 77.209 , 28.6139], // starting position [lng, lat]
    //     zoom: 9 // starting zoom
    // });

    // console.log(coordinates);

    // const marker = new mapboxgl.Marker({color:"red"})
    //     .setLngLat(coordinates)
    //     .setPopup(new mapboxgl.Popup({offset:25})
        
    //     .setHTML("<h1>Exact Location Provided after booking</h1>")
    // )
    //     .addTo(map);


        