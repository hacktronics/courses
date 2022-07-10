// add domcontnetloaded listener
let responseRecorded = false;

window.addEventListener("DOMContentLoaded", function() {
  // add event handlers for li click
  var lis = document.querySelectorAll("li");
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      if (responseRecorded) {
        return;
      }
      //remove the class from all li
      for (var j = 0; j < lis.length; j++) {
        lis[j].classList.remove("active");
      }
      this.classList.toggle("active");
      responseRecorded = true;
      if (this.classList.contains("correct")) {
        window.parent.postMessage('GoodJob', '*');
      } else {
        window.parent.postMessage('Oops', '*');
      }
    });
  }
});
