//executar função//
    document.querySelector('#enviar').addEventListener('click',consulta);
    document.querySelector('#enviar').addEventListener('click',anim);
//executar função//
    
//buscar dados//
    async function consulta(){
        let film = document.querySelector('#tit').value;
        const url='https://swapi.dev/api/films/' + film + '/';
        try{
            let resposta =  await fetch(url);
            let js = await resposta.json();
            mostraDados(js);
        }catch {
            console.log(err)
        }
    }
//buscar dados//

//rodar animação//
    function anim(){
        let zero = document.querySelector('#mostra');
        zero.classList.add('end');
    }
//rodar animação//

//mostrar dados//
    function mostraDados(js){
        const painel = document.querySelector('#mostra');
        let texto= "<h1>Filme solicitado</h1>";
        texto = texto + "Nome: Star Wars: "+ js.title+"<br><br>";
        texto = texto + "Número do Episódio (cronológicamente): "+ js.episode_id+"<br><br>";
        texto = texto + "Lançamento: "+ js.release_date+"<br><br>";
        texto = texto + "Abertura: "+ js.opening_crawl+"<br><br>";
        texto = texto + "Para traduzir: https://translate.google.com.br/?hl=pt-BR<br><br>"
        painel.innerHTML = texto;
    }
//mostrar dados//