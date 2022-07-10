// add domcontnetloaded listener
let responseRecorded = false;

window.addEventListener("DOMContentLoaded", function() {
  // add event handlers for li click
  var divs = document.querySelectorAll(".form_items_content");
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function() {
      if (responseRecorded) {
        return;
      }
      //remove the class from all li
      for (var j = 0; j < divs.length; j++) {
        divs[j].classList.remove("active");
      }
      this.classList.toggle("active");
      responseRecorded = true;
      if (this.classList.contains("correct")) {
        window.parent.postMessage("GoodJob", "*");
      } else {
        window.parent.postMessage("Oops", "*");
      }
    });
  }
});
