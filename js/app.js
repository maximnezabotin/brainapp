let svgW = document.getElementsByTagName('svg')[0].clientWidth;
const circle = document.querySelector('circle');
circle.r.baseVal.value = svgW / 2 - 8;
circle.cx.baseVal.value = svgW / 2;
circle.cy.baseVal.value = svgW / 2;
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

/*circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;*/

function setProgress(percent) {
  /*const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;*/
}

setProgress(55);

window.onresize = (e) => {
  svgW = document.getElementsByTagName('svg')[0].clientWidth;
  circle.r.baseVal.value = svgW / 2 - 8;
  circle.cx.baseVal.value = svgW / 2;
  circle.cy.baseVal.value = svgW / 2;
  radius = circle.r.baseVal.value;
  circumference = radius * 2 * Math.PI;

  /*circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;*/

  setProgress(55);
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

window.onload = function() {
  document.getElementById("arc1").setAttribute("d", describeArc(svgW / 2, svgW / 2, svgW / 2 - 8, 0, 200));
};
