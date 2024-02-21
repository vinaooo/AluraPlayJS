async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos")
  return await conexao.json();
}

async function criaVideos(element) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: element.titulo,
      descricao: `${element.descricao} mil visualizações`,
      url: element.url,
      imagem: element.imagem
    })
  })
  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo")
  }
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function buscaVideo(busca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`)
  const conexaoConvertida = conexao.json();

  return conexaoConvertida
}

export const conectaApi = {
  listaVideos,
  criaVideos,
  buscaVideo
}
