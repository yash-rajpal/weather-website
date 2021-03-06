const request = require('request')
//using requests to make api calls and get weather info
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWRpdHlhcmFqc2luZ2h2aSIsImEiOiJjazR0d3FubW4wMWliM2xudHl0ZXBrenplIn0.JOTgFJkmk0GG9lgrbyOXxQ&limit=1'

    request({ url , json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            //callback function
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
//exporting geocode function
module.exports = geocode