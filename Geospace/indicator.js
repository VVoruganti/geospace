class Point {
    constructor(lat, long) {
      this.lat = lat;
      this.lng = long;
    }
  }
// var timer;
          
// function startTimer()
// {
            // timer = setInterval(

let P1 = new Point(10, 2014);
let P2 = new Point(20, 2019);
let P3 = new Point(30, 2014);
let P4 = new Point(40, 2019);

var pointlist = [P1,P2,P3,P4];

function compare() 
{ 
// var curlat= map.center.lat()
// var curlong= map.center.lng()
var curlat=0;
var curlong=0;
var mindist=0;
for (var i=0; i < pointlist.length; i++)
{
var distance= Math.sqrt(Math.pow(curlat-pointlist[i].lat,2)+Math.pow(curlong-pointlist[i].lng,2))
    if (distance<mindist || i==1)
    {
        mindist=distance;
    }
}
//return mindist;
console.log(mindist);
}

// , 
// 1000);
// }
