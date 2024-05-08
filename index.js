function toggleDropdown() {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
 
//   window.onclick = function(event) {
//     if (!event.target.closest('.dropdown')) {
//       var openDropdown = document.getElementById("myDropdown");
//       if (openDropdown.style.display === "block") {
//         openDropdown.style.display = "none";
//       }
//     }
//   }