import { conectaApi } from "./conectaAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento) {
  evento.preventDefault()

  const element = {
    imagem: document.querySelector("[data-imagem]").value,
    url: document.querySelector("[data-url]").value,
    titulo: document.querySelector("[data-titulo]").value,
    descricao: Math.floor(Math.random() * 10).toString()
  }
  try {
    await conectaApi.criaVideos(element)

    window.location.jref = "../pages/envio-concluido.html"
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener("submit", evento => criarVideo(evento))