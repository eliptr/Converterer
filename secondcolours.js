
mm2.addEventListener('click', mm2cl);
cm2.addEventListener('click', cm2cl);
dm2.addEventListener('click', dm2cl);
m2.addEventListener('click', m2cl);
km2.addEventListener('click', km2cl);


function mm2cl() {
  mm2.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  cm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  second = "mm";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function cm2cl() {
  mm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm2.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  dm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  second = "cm";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function dm2cl() {
  mm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm2.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  m2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  second = "dm";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function m2cl() {
  mm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m2.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1";
  km2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  second = "met";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}

function km2cl() {
  mm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m2.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km2.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  second = "km";
  mmto();
  cmto();
  dmto();
  mto();
  kmto();
}
