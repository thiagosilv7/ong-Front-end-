/mobile*/
function toggleMenu() {
  const Menu = document.getElementById('navMenu');
  menu classList.toggle('active');
}   

function scrollActive(sectionId) {
  const sections = document.getElementById(sectionId);

  if(!sections) return;

  const height = 70;
  const sectionTop = sections.offsetTop - headerheight;

  window.scrollTo({top: sectionPosition, behavior: 'smooth'});  

  const menu = document.getElementById('navMenu');
    menu.classList.remove('active');


    function handlesubmit(event) {
        event.preventDefault();

        const form = document.getElementById('volunteerForm');

        const formData ={
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            interest: form.interest.value
        }   

 