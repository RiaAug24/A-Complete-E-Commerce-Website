//copy menu for mobile
function copyMenu() {
  //copy insdie .dpt-cat to .departments
  let dptCategory = document.querySelector('.dpt-cat');
  let dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  //COPY NAV INSIDE NAV
  const mainNav = document.querySelector('.header-nav nav'); 
  const navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  const topNav = document.querySelector('.header-top .wrapper');
  const topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

//show side-menubar on mobile

const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}