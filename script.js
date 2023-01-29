const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0

next.addEventListener('click', () => {
    if(currentActive < 4) {
        currentActive++
    } else if(currentActive >= 4) {
        currentActive = 0
    }

    if(currentActive > circles.length && currentActive < 4) {
        currentActive = circles.length
    } else {
        progress.style.width = 0 
    }
                      
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

}