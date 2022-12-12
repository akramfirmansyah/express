let formAdd = document.getElementById("formAddInventaris")

function ShowFormAddFunction() {
    formAdd.classList.replace("hidden", "fixed")
}

function hiddenFormAddInventaris() {
    formAdd.classList.replace("fixed", "hidden")
}

$(".btn-delete").click(function(e){
    let code = $(e.target).attr("code")
    
    axios({
        url: window.location.href,
        method: 'delete',
        data: {
            code: code
        },
    })
    window.location.reload()
})