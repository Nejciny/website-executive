function activePage(link) {
    const links = document.querySelectorAll('.header-links a');
  
    links.forEach(link => {
      link.classList.remove('underline');
    });
  
    link.classList.add('underline');
    console.log("click")
}

const burgerAnimation = () => {
		$('#nav-icon3').toggleClass('open');

    navSlide();
};

const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('links-mobile');

  
    nav.classList.toggle('active');
};