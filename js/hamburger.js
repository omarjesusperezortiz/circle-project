// HAMBURGER MENU

const activeMenu = () => {
    const menuBar = document.getElementById('menuBar');
    const hamIcon = document.getElementById('hamburger').children[0];
    console.log(menuBar)
    if (hamIcon.className === "fa fa-bars") {
      menuBar.className = "navbar-menu active";
      hamIcon.className = "fa fa-close"

    } else {
      menuBar.className = "navbar-menu";
      hamIcon.className = "fa fa-bars"
    }
  }

  const hamIcon= document.getElementById('hamburger');

  hamIcon.addEventListener('click',activeMenu)