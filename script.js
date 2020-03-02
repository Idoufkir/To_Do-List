function Add(){
    var container = document.getElementById("box");
    var val = document.getElementById('inp').value;
    var inpu = document.createElement("input");
    inpu.setAttribute("type","checkbox");
    inpu.setAttribute("class","chek");

    var spa = document.createElement("span");
    spa.setAttribute("class","vv");
    var valspan = document.createTextNode(val);
    var sautLine = document.createElement("br");
    container.appendChild(sautLine);
    spa.appendChild(valspan);
    container.appendChild(inpu);
    container.appendChild(spa);
    inpu.setAttribute("onclick","cheek()");


  }
  function cheek(){
    var ch = document.getElementsByClassName("chek");
    var spaan = document.getElementsByClassName("vv");
    // boucle poure verefier check (ch) 
    for(var i = 0; i < ch.length; i++)
    {
      if(ch[i].checked)
      {
  
        spaan[i].style.textDecoration = "line-through";
      }
      else
      {
          spaan[i].style.textDecoration = "none";
      }
    }
 

  }