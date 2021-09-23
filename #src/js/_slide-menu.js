const $slideMenuBtn = $('.header__slide-menu-btn')
const $slideMenu = $('.slide-menu')

$slideMenuBtn.click(() => {
  $slideMenu.toggleClass('slide-menu--opened')
})
