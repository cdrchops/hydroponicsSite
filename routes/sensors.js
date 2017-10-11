
app.get('/sensor/temperature', sensors.getTemperature)

app.get('/sensor/humidity', sensors.getHumidity)

app.get('/sensor/waterTemp', sensors.getWaterTemp)

app.get('/sensor/water', sensors.getWater)

app.get('/sensor/lux', sensors.getLux)

app.get('/sensor/air', sensors.getAir)

app.get('/sensor/all', sensors.getAll)

module.exports = sensors