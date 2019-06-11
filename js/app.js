const svg = document.querySelector('svg');
const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const path1 = document.querySelector('#arc1');
const path2 = document.querySelector('#arc2');
const PADDING_RAD = 10, START_ANGLE = 220, END_ANGLE = 430, PADDING = 16, PADDING_INNER = 20;
resize();

function resize(e) {
  const halfSVGW = svg.clientWidth / 2;
  circle1.r.baseVal.value = halfSVGW - PADDING_RAD - PADDING;
  circle1.cx.baseVal.value = halfSVGW;
  circle1.cy.baseVal.value = halfSVGW + PADDING / 2;

  circle2.r.baseVal.value = halfSVGW - PADDING_RAD - PADDING - PADDING_INNER;
  circle2.cx.baseVal.value = halfSVGW;
  circle2.cy.baseVal.value = halfSVGW + PADDING / 2;

  path1.setAttribute("d", describeArc(halfSVGW, halfSVGW + PADDING / 2, halfSVGW - PADDING_RAD - PADDING, START_ANGLE, END_ANGLE));
  path2.setAttribute("d", describeArc(halfSVGW, halfSVGW + PADDING / 2, halfSVGW - PADDING_RAD - PADDING - PADDING_INNER, START_ANGLE, END_ANGLE));
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
