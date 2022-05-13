const btn = document.querySelector(".btn")
const pass1 = document.querySelector(".password__one")
const pass2 = document.querySelector(".password__two")
const pass3 = document.querySelector(".password__three")
const pass4 = document.querySelector(".password__four")
let password1 = ""
let password2 = ""
let password3 = ""
let password4 = ""
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6,  7, 8 , 9, "!", "@", "#", "$", "%", "^"]

btn.addEventListener("click", function() {
    let clickedOnce = false
    // Getting Characters
    for (let i = 0; i < 10; i++) {
        let random_number = Math.floor(Math.random() * 42)
        let char = characters[random_number]
        password1 += char
    }
    for (let i = 0; i < 10; i++) {
        let random_number = Math.floor(Math.random() * 42)
        let char = characters[random_number]
        password2 += char
    } 
    for (let i = 0; i < 10; i++) {
        let random_number = Math.floor(Math.random() * 42)
        let char = characters[random_number]
        password3 += char
    }
    for (let i = 0; i < 10; i++) {
        let random_number = Math.floor(Math.random() * 42)
        let char = characters[random_number]
        password4 += char
    } 
    //  Setting Passwords
    pass1.textContent = password1
    pass2.textContent = password2
    pass3.textContent = password3
    pass4.textContent = password4
    clickedOnce = true
    // Clearing Existing Passwords
    if (clickedOnce) {
        password1 = ""
        password2 = ""
        password3 = ""
        password4 = ""
    }
})