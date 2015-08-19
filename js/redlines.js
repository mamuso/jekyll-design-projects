var confs = [];

checkConf = function() {

  a = document.getElementById(this.id+"-elem");
  if (this.checked) {
    a.classList.remove('hide');
  } else {
    a.classList.add('hide');
  }
}

window.onload = function() {
  
  // Configure open/close
  document.getElementById("redlines-toolbar-action").onclick = function(e) {
    document.getElementById("redlines-toolbar").classList.toggle('closed')
    return false;
  }

  confs = document.getElementsByName("conf");

  for(i=0; i<confs.length; i++) {
    confs[i].onchange =  checkConf
  }

}