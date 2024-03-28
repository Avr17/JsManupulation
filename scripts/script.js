document.addEventListener('DOMContentLoaded', () => {
    alert("A pagina foi totalente carregada e js foi implementado!")

    loadUserData()
})

function loadUserData(event) {
    event.preventDefault ()


    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,

    }

}