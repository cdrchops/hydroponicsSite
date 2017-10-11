var express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
var sensors = require('./routes/sensors.js')
var app = express()

//App use de las vistas y los módulos extras (materialize y jQuery)
app.use(express.static('views'))
app.use('/extra_modules', express.static('extra_modules'))

app.use('/',sensors)


app.get('/serialport',function(req,res){
	var SerialPort = require('serialport');
	var port = new SerialPort('/dev/tty-usbserial1', {
	  baudRate: 57600
	});
})

// app.get('/sensor/temperature', sensors.temperature)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})