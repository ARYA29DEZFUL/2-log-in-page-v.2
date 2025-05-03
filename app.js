let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let massege = document.getElementById("Alert")
let container = document.querySelector(".container")
let button = document.getElementById("button")

let errorUserName = document.getElementById("User-Name-error")
let errorPassword = document.getElementById("Password-error")

console.log(errorUserName)
console.log(errorPassword)




let buttonFunk = function () {
    if (input1.value.length < 12 || input1.value.length < 8) {
        massege.style.display = "block"
        container.style.boxShadow = "0px 0px 50px red";
        button.style.backgroundColor = "red"
    } else {
        massege.style.display = "block"
        massege.innerHTML = "خوش آمدید"
        massege.style.backgroundColor = "green"
        container.style.boxShadow = "0px 0px 50px 0px green";
        button.style.backgroundColor = "#50a84d"
    }
}

let ckeckValueUserName = function (event) {
    if (event.target.value.length < 11) {
        errorUserName.style.display = "block"
        errorUserName.style.color = "red"
        errorUserName.innerHTML = "Password shold have 12 charicter ! ..."
    } else {
        errorUserName.style.color = "green"
        errorUserName.innerHTML = " Accepte "
        errorUserName.style.textShadow = "0px 2px 10px green"
    }
}

let ckeckValuePassword = function (event) {
    if (event.target.value.length <= 7) {
        errorPassword.style.display = "block"
        errorPassword.style.color = "red"
        errorPassword.innerHTML = "Password shold have 8 charicter ! ..."
    } else {
        errorPassword.style.color = "green"
        errorPassword.innerHTML = " Accepte "
        errorPassword.style.textShadow = "0px 2px 10px green"
    }
}






