let random_number


function reset() {
    input = document.querySelector('#submit')
    result = document.querySelector('#result')
    input.value = ''
    result.textContent = ''
    random_number = Math.floor(Math.random() * 100 + 1)  // 0~1 반환
}

reset()

function top_down() {
    input = document.querySelector('#submit')
    result = document.querySelector('#result')
    value = input.value
    if (!value) return
    if (isNaN(value)) return
    value = parseInt(value)
    
    if (value === random_number) {
        result.textContent = "정답입니다"
        let reset_btn = document.createElement('button')
        reset_btn.setAttribute('onclick', 'reset()')
        reset_btn.textContent = '다시하기'
        result.appendChild(reset_btn)
    } else if (value > random_number) {
        result.textContent = "틀렸습니다 더 작은 수 입니다."
    } else {
        result.textContent = "틀렸습니다 더 높은 수 입니다."
    }
    console.log(random_number)
}