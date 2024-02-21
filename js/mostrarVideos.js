import { conectaApi } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista")

export default function constroiCard(element) {
  const video = document.createElement("li")
  video.className = "videos__item";
  console.log(element.url)
  video.innerHTML = `<iframe width="100%" height="72%" src="${element.url}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
  <div class="descricao-video">
  <img src="${element.imagem}" alt="logo canal alura">
  <h3>${element.titulo}</h3>
      <p>${element.descricao}</p>
  </div>
  `
  return video
}

async function listaVideo() {
  try {
    const listaApi = await conectaApi.listaVideos("")
    listaApi.forEach(element => lista.appendChild(constroiCard(element)))
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos<h2>`
  }

};

listaVideo()