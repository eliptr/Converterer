// id variables
var result = document.getElementById('result');
var header = document.getElementsByClassName('header');
var input = document.getElementById('input');

var mm1 = document.getElementById('mm1');
var cm1 = document.getElementById('cm1');
var dm1 = document.getElementById('dm1');
var m1 = document.getElementById('m1');
var km1 = document.getElementById('km1');

var mm2 = document.getElementById('mm2');
var cm2 = document.getElementById('cm2');
var dm2 = document.getElementById('dm2');
var m2 = document.getElementById('m2');
var km2 = document.getElementById('km2');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var clear = document.getElementById('erase');
var zero = document.getElementById('zero');
var back = document.getElementById('back');

// variables

var sp = "\xa0";
var first;
var second;
var third;

// onload
function draw() {
  result.innerHTML = input.innerHTML / first + sp;
}

function draw2() {
  result.innerHTML = input.innerHTML * first + sp;
}

// Math stuff

// mm to..
function mmto() {
  if (second === "mm" && third === "mm") {
    first = 1;
    draw();
  }
  if (second === "cm" && third === "mm") {
    first = 100;
    draw();
  }
  if (second === "dm" && third === "mm") {
    first = 10000;
    draw();
  }
  if (second === "met" && third === "mm") {
    first = 1000000;
    draw();
  }
  if (second === "km" && third === "mm") {
    first = 1000000000000;
    draw();
  }
}

function cmto() {
  if (second === "mm" && third === "cm") {
    first = 100;
    draw2();
  }
  if (second === "cm" && third === "cm") {
    first = 1;
    draw();
  }
  if (second === "dm" && third === "cm") {
    first = 100;
    draw();
  }
  if (second === "met" && third === "cm") {
    first = 10000;
    draw();
  }
  if (second === "km" && third === "cm") {
    first = 10000000000;
    draw();
  }
}

function dmto() {
  if (second === "mm" && third === "dm") {
    first = 10000;
    draw2();
  }

  if (second === "cm" && third === "dm") {
    first = 100;
    draw2();
  }

  if (second === "dm" && third === "dm") {
    first = 1;
    draw();
  }
  if (second === "met" && third === "dm") {
    first = 100;
    draw();
  }
  if (second === "km" && third === "dm") {
    first = 100000000;
    draw();
  }
}

function mto() {
  if (second === "mm" && third === "m") {
    first = 1000000;
    draw2();
  }

  if (second === "cm" && third === "m") {
    first = 10000;
    draw2();
  }

  if (second === "dm" && third === "m") {
    first = 100;
    draw2();
  }
  if (second === "met" && third === "m") {
    first = 1;
    draw();
  }
  if (second === "km" && third === "m") {
    first = 1000000;
    draw();
  }
}

function kmto() {
  if (second === "mm" && third === "km") {
    first = 1000000000000;
    draw2();
  }

  if (second === "cm" && third === "km") {
    first = 10000000000;
    draw2();
  }

  if (second === "dm" && third === "km") {
    first = 100000000;
    draw2();
  }
  if (second === "met" && third === "km") {
    first = 1000000;
    draw2();
  }
  if (second === "km" && third === "km") {
    first = 1;
    draw();
  }
}
