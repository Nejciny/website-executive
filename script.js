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

const handleSubmit = (event) =>{

  event.preventDefault();

  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;

  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Email:", email);

  // clear input fields
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";

};