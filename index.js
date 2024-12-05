//criar referência ao formulário e ao h3
const frm = document.querySelector('form');
const resp = document.querySelector("h3")

//adicionar evento de submissão ao formulário
frm.addEventListener('submit', async (e) => {
    const nome = frm.InNome.value
    resp.innerText = `Olá ${nome}`

    e.preventDefault()
})
