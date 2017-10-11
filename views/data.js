function shuffle(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fillData(){
	$.ajax({
		url : "http://localhost:3000/sensor/all",
		type : 'GET',
		success : function(data){
			console.log(data)
			$('#txtWater').html(data.success.water + "%")
			$('#txtLux').html(data.success.lux + "%")
			$('#txtHumidity').html(data.success.humidity + "%")
			$('#txtAir').html(data.success.water + "ºC")
		}
	})
}
$(document).ready(function(){
	fillData()
	setInterval(fillData, 3000)
})