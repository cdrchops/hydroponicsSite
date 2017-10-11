var ctx = document.getElementById('myChart').getContext('2d');

var chart1 = []
var chart2 = []
var chart3 = []

for(i=0;i<8;i++){
    chart1.push(shuffle(1,10))
    chart2.push(shuffle(1,10))
    chart3.push(shuffle(1,10))
}

console.log(chart1)
console.log(chart2)
console.log(chart3)

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre"],
        datasets: [{
                label: "Luz",
                backgroundColor: 'rgb(255,243,90)',
                borderColor: 'rgb(255,243,90)',
                data: chart1
            },
            {
                label: "Agua",
                backgroundColor: 'rgb(21,126,244)',
                borderColor: 'rgb(21,126,244)',
                data: chart2
            },
            {
                label: "Humedad",
                backgroundColor: 'rgb(158,211,205)',
                borderColor: 'rgb(158,211,205)',
                data: chart3
            },
        ]
    }
});
$(".button-collapse").sideNav();