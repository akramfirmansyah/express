let formAdd = document.getElementById("formAddInventaris")

function ShowFormAddFunction() {
    formAdd.classList.replace("hidden", "fixed")
}

function hiddenFormAddInventaris() {
    formAdd.classList.replace("fixed", "hidden")
}