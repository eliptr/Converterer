
one.addEventListener('click', onecl);
two.addEventListener('click', twocl);
three.addEventListener('click', threecl);
four.addEventListener('click', fourcl);
five.addEventListener('click', fivecl);
six.addEventListener('click', sixcl);
seven.addEventListener('click', sevencl);
eight.addEventListener('click', eightcl);
nine.addEventListener('click', ninecl);
zero.addEventListener('click', zerocl);
clear.addEventListener('click', clearcl);
back.addEventListener('click', backcl);
input.addEventListener('click', inputcl);

function onecl() {
  input.innerHTML = input.innerHTML  + "1";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function twocl() {
  input.innerHTML = input.innerHTML  + "2";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function threecl() {
  input.innerHTML = input.innerHTML  + "3";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function fourcl() {
  input.innerHTML = input.innerHTML  + "4";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function fivecl() {
  input.innerHTML = input.innerHTML  + "5";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function sixcl() {
  input.innerHTML = input.innerHTML  + "6";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function sevencl() {
  input.innerHTML = input.innerHTML  + "7";
  mmto();
  dmto();
  mto();
  kmto();
}

function eightcl() {
  input.innerHTML = input.innerHTML  + "8";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function ninecl() {
  input.innerHTML = input.innerHTML  + "9";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function zerocl() {
  input.innerHTML = input.innerHTML  + "0";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function clearcl() {
  input.innerHTML = "";
}

function backcl() {
  input.innerHTML = input.innerHTML.slice(0, -1);
}

function inputcl() {
  input.innerHTML = input.innerHTML + ".";
}
