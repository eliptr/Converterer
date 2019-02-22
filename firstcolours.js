
mm1.addEventListener('click', mmcl);
cm1.addEventListener('click', cmcl);
dm1.addEventListener('click', dmcl);
m1.addEventListener('click', mcl);
km1.addEventListener('click', kmcl);


function mmcl() {
  mm1.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  cm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  mmto();
  third = "mm";
}

function cmcl() {
  mm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm1.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  dm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cmto();
  third = "cm";
}

function dmcl() {
  mm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm1.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  m1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dmto();
  third = "dm";
}

function mcl() {
  mm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m1.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1";
  km1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  mto();
  third = "m";
}

function kmcl() {
  mm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  cm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  dm1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  m1.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.4)";
  km1.style.boxShadow = "0px 0px 6px rgba(61, 134, 230, 1)";
  third = "km";
  kmto();
}
