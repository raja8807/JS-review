let p = document.querySelector("p")


function getInputs() {
    var base = parseInt(prompt("Enter the number"))
    var opr = prompt("Operator")
    exp(base, opr)
}

getInputs()

function exp(num, opr) {
    if (opr == "square") {
        alert(num ** 2)
    } else if (opr == "cube") {
        alert(num ** 2)
    } else if (opr == "power") {
        let power = parseInt(prompt("enter power"))
        alert(num ** power)
    }else{
        alert("invalid inputs")
        getInputs()
    }
}
