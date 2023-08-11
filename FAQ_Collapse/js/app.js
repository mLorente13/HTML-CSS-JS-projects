let openCollapseIcons = document.querySelectorAll('.chevron-icon')
let openCollapseIconsArr = Array.from(openCollapseIcons)



openCollapseIconsArr.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.parentElement.classList.contains('active')) {
            element.parentElement.classList.remove('active')
            element.classList.remove('active')
        } else {
            element.parentElement.classList.add('active')
            element.classList.add('active')
        }
    })
})