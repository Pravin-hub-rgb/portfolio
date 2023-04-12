let container = document.querySelectorAll('.outer-container');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    container.forEach(con => {
        let top = window.scrollY;
        let offset = con.offsetTop;
        let height = con.offsetHeight;
        let id = con.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}