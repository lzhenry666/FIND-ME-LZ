(function() {
  const tags = [".mudar-tema-wrapper", "header", "main"];
  const loader_page = document.createElement("div");

  const alterarVisibilidade = (tags, displayStyle) => {
    tags.forEach(tag => {
      const element = document.querySelector(tag);
      if(element) {
        element.style.display = displayStyle;
      }
    });
  };

  function loader() {
    alterarVisibilidade(tags, "none");
    loader_page.innerHTML = '<div class="pokebola">  <div class="pokebola-botao"></div></div>';
    document.body.appendChild(loader_page);
  }

  loader();

  setTimeout(() => {
    alterarVisibilidade(tags, "block");
    document.body.removeChild(loader_page);
  }, 1500);


const alterarTema = document.querySelector(
  '.mudar-tema input[type="checkbox"]'
);

const temaAtual = localStorage.getItem("tema");

if (temaAtual) {
  document.documentElement.setAttribute("data-tema", temaAtual);
  if (temaAtual === "dark") {
    alterarTema.checked = true;
  }
}

function mudarTema(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-tema", "dark");
    localStorage.setItem("tema", "dark");
  }else {
    document.documentElement.setAttribute("data-tema", "light");
    localStorage.setItem("tema", "light");
  }
}

alterarTema.addEventListener("change", mudarTema, false);

//Cópiar chave PIX
document.querySelector("button").addEventListener("click",
  function (event) {
    var textRange = document.createRange()
    textRange.selectNode(document.getElementById("chave"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(textRange)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    document.querySelector("button").innerText = 'Copiado!'
})



const link = document.querySelector('a[href="/assets/cv/CURRICULO LUIZ MARTINS.pdf"]');

link.addEventListener('click', function(event) {
  event.preventDefault(); // previne o comportamento padrão do link

  const url = link.getAttribute('href');
  const filename = url.split('/').pop(); // obtém o nome do arquivo a partir da URL

  // cria um elemento <a> invisível para iniciar o download
  const downloadLink = document.createElement('a');
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);

  // define o atributo 'href' do link como a URL do arquivo
  downloadLink.href = url;

  // define o atributo 'download' para o nome do arquivo
  downloadLink.download = filename;

  // aciona o clique no link para iniciar o download
  downloadLink.click();

  // remove o link do DOM após o download
  document.body.removeChild(downloadLink);
});
})();