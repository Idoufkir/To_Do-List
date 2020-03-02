function Add(){
    var container = document.getElementById("box");
    var val = document.getElementById('inp').value;
    var inpu = document.createElement("input");
    inpu.setAttribute("type","checkbox");
    inpu.setAttribute("id","chek");

    var spa = document.createElement("span");
    spa.setAttribute("id","vv");
    var valspan = document.createTextNode(val);
    var sautLine = document.createElement("br");
    container.appendChild(sautLine);
    spa.appendChild(valspan);
    container.appendChild(inpu);
    container.appendChild(spa);
    inpu.setAttribute("onclick","cheek()");


  }
  function cheek(){
    var ch = document.getElementById("chek");
    var spaan = document.getElementById("vv");
    if(ch.checked)
    {

      spaan.style.textDecoration = "line-through";
    }
    else
    {
        spaan.style.textDecoration = "none";
    }

  }