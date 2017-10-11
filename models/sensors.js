function shuffle(min, max) {
    // console.log('shufflin!')
    return Math.floor(Math.random() * (max - min)) + min
}

module.exports.getHumidity = function(req, res) {
    console.log('getting all data')
    var jsonRes = {
        success: shuffle(0, 100)
    }
    res.send(jsonRes).end();
}

module.exports.getTemperature = function(req, res) {
    var jsonRes = {
        success: shuffle(20, 30)
    }
    res.send(jsonRes).end();
}

module.exports.getWaterTemp  = function(req, res) {
    var jsonRes = {
        success: shuffle(20, 30)
    }
    res.send(jsonRes).end();
}

module.exports.getWater = function(req, res) {
    var jsonRes = {
        success: shuffle(0, 100)
    }
    res.send(jsonRes).end();
}

module.exports.getLux = function(req, res) {
    var jsonRes = {
        success: shuffle(0, 100)
    }
    res.send(jsonRes).end();
}

module.exports.getAir = function(req, res) {
    var jsonRes = {
        success: shuffle(0, 100)
    }
    res.send(jsonRes).end();
}

module.exports.getAll = function(req, res) {
    console.log('getting all data')
    var jsonRes = {
        success: {
            humidity: shuffle(0, 100),
            temperature: shuffle(20, 30),
            waterTemp: shuffle(20, 30),
            water: shuffle(0, 100),
            lux: shuffle(0, 100),
            airQ: shuffle(0, 100)
        }
    }
    res.send(jsonRes).end();
}