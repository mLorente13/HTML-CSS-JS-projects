let searchBtn = document.querySelector('.search-btn')

searchBtn.addEventListener('click', () => {
    if (searchBtn.classList.contains('active')) {
        searchBtn.classList.remove('active')
    } else {
        searchBtn.classList.add('active')
    }
})