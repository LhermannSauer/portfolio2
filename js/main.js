const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

$(function () {
  const backgroundHeader = $(".background .block__header");
  $(backgroundHeader).mouseenter(function () {
    backgroundHeader.addClass("animate__headShake");
  });
  $(backgroundHeader).mouseout(function () {
    setTimeout(() => {
      backgroundHeader.removeClass("animate__headShake");
    }, 1500);
  });
});
