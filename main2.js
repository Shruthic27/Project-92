var N1=""
var N2=""
var A=""
var At="p2"
var s1=0
var s2=0
var aa=""
var p1n=localStorage.getItem("p1n")
var p2n=localStorage.getItem("p2n")
document.getElementById("p1n").innerHTML=p1n
document.getElementById("p2n").innerHTML=p2n
document.getElementById("p1s").innerHTML=p1n
document.getElementById("p2s").innerHTML=p2n
function send(){
  N1=document.getElementById("n1").value
  N2=document.getElementById("n2").value
 aa=parseInt(N1) * parseInt(N2)
  var q=N1+"x"+N2
  localStorage.setItem("mp",document.getElementById("n1").value)
  localStorage.setItem("mp",document.getElementById("n2").value)
  document.getElementById("q").innerHTML=q
  document.getElementById("Answer").style="display:block"
  }
  function qa(){
  A=document.getElementById("a").value
  if (aa==A) {
    if (At=="p2") {
      s2=s2+1
      s1=s1+0
      document.getElementById("S2").innerHTML=s2 
      At="p1"
  } else {
      s1=s1+1
      s2=s2+0
    document.getElementById("S1").innerHTML=s1
    At="p2"
  }
  if (At=="p2") {
    document.getElementById("p1n").innerHTML=p2n
    document.getElementById("p2n").innerHTML=p1n
    At="p1"
    } else {
    document.getElementById("p1n").innerHTML=p2n
    document.getElementById("p2n").innerHTML=p1n
    At="p2"
    }
  }
  }
