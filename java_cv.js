


const headings = document.querySelectorAll('h1, h2, h3');

headings.forEach((heading) => {
    heading.addEventListener('mouseenter', () => {
        heading.style.color = '#ff6600'; // Change text color on hover
    });

    heading.addEventListener('mouseleave', () => {
        heading.style.color = '#007acc'; // Reset text color
    });
});

