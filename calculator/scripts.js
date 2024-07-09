let string = ""

let buttons = document.querySelectorAll(".button")
let input = document.querySelector(".input")
const calculate = () => {
    try {
        string = eval(string).toString()

    } catch (error) {
        string = "Syntax Error"
    }
}

const clear = () => {
    string = ""
}

const deleteLast = () => {
    string = string.slice(0, -1)
}

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.innerHTML === "=") {
            calculate()
        }
        else if (event.target.innerHTML === "AC") {
            clear()
        }
        else if (event.target.innerHTML === "C") {
            deleteLast()

        }
        else {
            string += event.target.innerHTML
        }
        input.value = string
    })
})

document.addEventListener("keydown", (e) => {

    const key = e.key
    if (key === "Enter") {
        calculate()
    }
    else if (key === "Backspace") {
        deleteLast()
    }
    else {
        string += key
    }
    input.value = string
})