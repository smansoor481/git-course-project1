function changeHeading() {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Heading Changed!';
    heading.style.color = '#d32f2f';
}
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});
