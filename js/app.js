let svgW = document.getElementsByTagName('svg')[0].clientWidth;
const circle = document.querySelector('circle');
circle.r.baseVal.value = svgW / 2 - 8;
circle.cx.baseVal.value = svgW / 2;
circle.cy.baseVal.value = svgW / 2;
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

setProgress(55);

window.onresize = (e) => {
  svgW = document.getElementsByTagName('svg')[0].clientWidth;
  circle.r.baseVal.value = svgW / 2 - 8;
  circle.cx.baseVal.value = svgW / 2;
  circle.cy.baseVal.value = svgW / 2;
  radius = circle.r.baseVal.value;
  circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  setProgress(55);
}
