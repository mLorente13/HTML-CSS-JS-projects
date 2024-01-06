let previous = document.getElementById('prev-btn'),
    count = 1,
    btns = document.querySelectorAll('.step'),
    lines = document.querySelectorAll('.line'),
    btnsArr = Array.from(btns),
    linesArr = Array.from(lines),
    next = document.getElementById('next-btn');

    

next.addEventListener('click', () => {
    btnsArr[count].classList.add('active')
    linesArr[count-1].classList.add('active')
    count++
    if (count === 3) {
        next.disabled = true
    } else if (count === 1) {
        previous.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
})

previous.addEventListener('click', () => {
    count--
    btnsArr[count].classList.remove('active')
    linesArr[count-1].classList.remove('active')
    if (count === 3) {
        next.disabled = true
    } else if (count === 1) {
        previous.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
})



