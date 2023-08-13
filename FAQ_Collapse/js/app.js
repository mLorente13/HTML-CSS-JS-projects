let openCollapseIcons = document.querySelectorAll('.chevron-icon')
let openCollapseIconsArr = Array.from(openCollapseIcons)



openCollapseIconsArr.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.parentElement.parentElement.classList.contains('active')) {
            element.parentElement.parentElement.classList.remove('active')
            element.classList.remove('active')
        } else {
            element.parentElement.parentElement.classList.add('active')
            element.classList.add('active')
        }
    })
})