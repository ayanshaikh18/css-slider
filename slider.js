(function () {
  var slider_containers = document.getElementsByClassName("slider-container");

  for (var i = 0; i < slider_containers.length; i++) {
    var left_btn = document.createElement("button");
    left_btn.innerHTML = "<";
    left_btn.classList.add("left-btn");
    left_btn.onclick = left_scroll;
    slider_containers[i].prepend(left_btn);

    var right_btn = document.createElement("button");
    right_btn.innerHTML = ">";
    right_btn.classList.add("right-btn");
    right_btn.onclick = right_scroll;
    slider_containers[i].append(right_btn);
  }

  document.getElementsByClassName;
})();

function left_scroll(e) {
  var clicked_btn = e.target;
  var slider_container = clicked_btn.parentElement;
  slider_container.scrollLeft -= 80;
}

function right_scroll(e) {
  var clicked_btn = e.target;
  var slider_container = clicked_btn.parentElement;
  slider_container.scrollLeft += 80;
}
