pink = "#fd01fc"

// Меню-бургер
$(".menu").hide();

$(".menu p, .nav__item").on("click", () => {
  $(".menu").hide();
})

const menu = () => {
  $(".menu").show();
}

// Статистика
// Участники
$(".users").on("click", () => {
  $(".users").attr("style", `background-color: ${pink} !important`);
  $(".activity, .messages, .online").css("backgroundColor", "transparent")
  $(".status__items iframe").attr("src", "https://discordserver.info/705807711174000750/widgets/chart/users")
})

// Активность
$(".activity").on("click", () => {
  $(".activity").attr("style", `background-color: ${pink} !important`);
  $(".users, .messages, .online").css("backgroundColor", "transparent")
  $(".status__items iframe").attr("src", "https://discordserver.info/705807711174000750/widgets/chart/activity")
})

// Сообщения
$(".messages").on("click", () => {
  $(".messages").attr("style", `background-color: ${pink} !important`);
  $(".users, .activity, .online").css("backgroundColor", "transparent")
  $(".status__items iframe").attr("src", "https://discordserver.info/705807711174000750/widgets/chart/messages")
})

// Онлайн
$(".online").on("click", () => {
  $(".online").attr("style", `background-color: ${pink} !important`);
  $(".users, .activity, .messages").css("backgroundColor", "transparent")
  $(".status__items iframe").attr("src", "https://discordserver.info/705807711174000750/widgets/chart/online")
})