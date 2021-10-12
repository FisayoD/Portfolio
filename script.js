var menuIcon = document.getElementById('menu');
var nav = document.getElementById("nav-ul");

menuIcon.style.marginRight = "30px";
menuIcon.addEventListener("click", toggleNav)
function toggleNav(){
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
document.onclick = () => applyCursorRippleEffect(event);

const colors = ["red", "blue", "yellow", "green", "purple", "orange"];
var randomVar;

function applyCursorRippleEffect(e) {
randomVar = Math.floor(Math.random() * colors.length);
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 
    ripple.style.animation = "ripple-effect .4s  linear";
    ripple.style.borderColor = colors[randomVar];
   ripple.onanimationend = () => document.body.removeChild(ripple);
}

