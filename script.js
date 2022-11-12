// Меню-бургер
$(".menu").hide();

$(".menu p, .nav__item").on("click", (e) => {
  $(".menu").hide();
})

const menu = () => {
  $(".menu").show();
}