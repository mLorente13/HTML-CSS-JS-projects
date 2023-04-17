document.addEventListener('click', (element) => {
    const images = document.querySelectorAll('.panel')
    images.forEach(element => {
        element.classList.remove('active')
    })
    element.target.classList.add('active');
})