// Меню-бургер
$(".menu").hide();
$("*").on("click", (e) => {
  if ($(e.target).is(".menu, .menu ul, .menu svg, .menu svg path, .nav__content")) {
    return false;
  }

  $(".menu").hide();
})
const menu = () => {
  $(".menu").show();
}