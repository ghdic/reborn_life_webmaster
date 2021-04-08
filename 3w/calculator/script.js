let isfinished = false

function push_button(element) {
    let value = element.textContent
    let input = document.querySelector('#result')

    if (isfinished) {
        input.value = ''
        isfinished = false
    }
    if (isNaN(value)) { // 숫자가 아닌 경우
        switch(value) {
            case '=':
                try {
                    result = eval(input.value)
                } catch {
                    result = "Error!!"
                }
                input.value = result
                isfinished = true
                break
            case '%':
            case '/':
            case '*':
            case '-':
            case '+':
                input.value += value
                break
            case 'C':
                input.value = ''
        }
    } else {
        input.value += value
    }
}