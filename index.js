const axios = require("axios");
const cheerio = require("cheerio");
const post = require("./controllers/apiController");
const url2 = "https://g1.globo.com/pe/pernambuco/carnaval/2023/noticia/2023/02/17/vai-curtir-o-carnaval-de-olinda-confira-programacao-de-shows-e-desfiles-de-blocos-nesta-sexta.ghtml";
// const url2 = "https://www.dci.com.br/dci-mais/cultura/carnaval-de-olinda-2023-veja-a-programacao-da-cidade-do-pernambuco/287492/"


//Codigo exemplo
// const url = "https://pt.wikipedia.org/wiki/Oscar_de_melhor_filme";
// async function getMovies() {
//     const { data } = await axios.get(url);
//     const $ = cheerio.load(data);

//     const list = [];
//     $(".wikitable tbody tr").each((i, elem) => {
//         const winners = $(elem).find('td[style*="background:#FAEB86"]');
//         const name = winners.last().text().replace("\n", "");
//         if (name !== "") {
//             const year = winners.first().prev("td").text().replace("\n", "").slice(-4);
//             movie = { name, year };
//             list.push(movie);
//         }
//     });
// }

//Codigo que eu mesmo fiz usando a programação da cidade de Olinda como um teste
const listAtracoes = [];

async function getAtracao(){
    const { data } = await axios.get(url2);
    const $ = cheerio.load(data);
    const list = [];
    $(".content-unordered-list li").each((i, elem) => {
        const recebe = $(elem)
        const name = recebe.last().text().replace("\n", "").split(":");
        const horario = name[0].length < 10 ? name[0] : "";
        const atracao = name[1]

        if(horario != "" && horario != "Local" ){
            let programa = { horario, atracao}
            list.push(programa);
          }
     });
     
     console.log(list);
     listAtracoes.push(list);
     
     post.create(listAtracoes);

}


module.exports.getAtracao = getAtracao;



