const navSlide = () => {
    const listMenu = document.querySelectorAll(".menuLink"),
          checkBox = document.querySelector("#active");

    listMenu.forEach(item => {
      item.addEventListener('click', () => {
        checkBox.checked = false;
      })
    })
};

export default navSlide;