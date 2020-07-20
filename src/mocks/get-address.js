const address = {
    "results": [
       {
          "address_components": [
             {
                "long_name": "04209-000",
                "short_name": "04209-000",
                "types": [
                   "postal_code"
                ]
             },
             {
                "long_name": "Rua do Manifesto",
                "short_name": "R. do Manifesto",
                "types": [
                   "route"
                ]
             },
             {
                "long_name": "Ipiranga",
                "short_name": "Ipiranga",
                "types": [
                   "political",
                   "sublocality",
                   "sublocality_level_1"
                ]
             },
             {
                "long_name": "São Paulo",
                "short_name": "São Paulo",
                "types": [
                   "administrative_area_level_2",
                   "political"
                ]
             },
             {
                "long_name": "São Paulo",
                "short_name": "SP",
                "types": [
                   "administrative_area_level_1",
                   "political"
                ]
             },
             {
                "long_name": "Brazil",
                "short_name": "BR",
                "types": [
                   "country",
                   "political"
                ]
             }
          ],
          "formatted_address": "R. do Manifesto - Ipiranga, São Paulo - SP, 04209-000, Brazil",
          "geometry": {
             "bounds": {
                "northeast": {
                   "lat": -23.5760725,
                   "lng": -46.6016223
                },
                "southwest": {
                   "lat": -23.5796845,
                   "lng": -46.6031656
                }
             },
             "location": {
                "lat": -23.5779717,
                "lng": -46.6022277
             },
             "location_type": "APPROXIMATE",
             "viewport": {
                "northeast": {
                   "lat": -23.5760725,
                   "lng": -46.6010449697085
                },
                "southwest": {
                   "lat": -23.5796845,
                   "lng": -46.6037429302915
                }
             }
          },
          "place_id": "ChIJc0eX9PpbzpQRKq96agn9Sdk",
          "types": [
             "postal_code"
          ]
       }
    ],
    "status": "OK"
 }

 const justResult = address.results;

 justResult.map( (value) => {
     value.geometry.location;
 })
 address.results.map( (value) => {
        console.log(value.geometry.location)
})