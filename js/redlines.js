var confs = [],
  notes = [];

checkConf = function() {
  a = document.getElementById(this.id+"-elem");
  if (this.checked) {
    a.classList.remove('hide');
  } else {
    a.classList.add('hide');
  }
}

toggleNote = function() {
  a = document.getElementById(this.id+"-text");
  a.classList.toggle('hide');
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

  notes = document.getElementsByClassName("note-dot");

  for(i=0; i<notes.length; i++) {
    notes[i].onclick =  toggleNote
  }

  action = document.getElementById('redlines-toolbar-action')
  action.onclick = function (e) {
    document.getElementById('redlines-toolbar-action-close').classList.toggle('hide');
    document.getElementById('redlines-toolbar-action-gear').classList.toggle('hide');
    document.getElementById('redlines-toolbar').classList.toggle('closed');
    return false;
  }

}