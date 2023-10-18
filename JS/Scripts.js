function navbarFunction() {
  var x = document.getElementById("nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function toTopFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function plusFunction() {
  document.getElementById("plus").style.display='block';
  document.getElementById("plus-minus").title='Hide';
  document.getElementById("plus-minus").innerHTML='-';
  document.getElementById("plus-minus").onclick=function() { minusFunction(); }
}

function minusFunction() {
  document.getElementById("plus").style.display='none';
  document.getElementById("plus-minus").title='Show more';
  document.getElementById("plus-minus").innerHTML='+';
  document.getElementById("plus-minus").onclick=function() { plusFunction(); }
}
