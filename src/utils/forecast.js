const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=77184ae7ccaf2c899cf2f675a213fe76&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Query Error Desc is: ' + body.error.info, undefined)
        } else {
            callback(undefined, {
                weatherDescription: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
              })
        }

    })

}

module.exports = forecast