const svg = document.querySelector('svg');
const circle = document.querySelector('circle');
const path = document.querySelector('path');
const PADDING = 8, START_ANGLE = 220, END_ANGLE = 430;
resize();

function resize(e) {
  const halfSVGW = svg.clientWidth / 2;
  circle.r.baseVal.value = halfSVGW - PADDING;
  circle.cx.baseVal.value = circle.cy.baseVal.value = halfSVGW;

  path.setAttribute("d", describeArc(halfSVGW, halfSVGW, halfSVGW - PADDING, START_ANGLE, END_ANGLE));
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = [
    'M', start.x, start.y, 
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;       
}

window.onresize = resize;
