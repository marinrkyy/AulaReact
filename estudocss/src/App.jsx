import "./App.css"


export default function App()
{
    return (
        <div>
            <h1>Estudo CSS</h1>
            
            <p>
                O CSS (<i>Cacasding Style Sheet</i>) é uma linguagem utilizada para estilizar <b>pagina web</b>, e sera utlizada dentro ou fora do HTML.
            </p>
            <p>
                Na aula de hoje, vamos estudar e entender como aplicar estilo css em componentes no React.
            </p>
            <p>Utilizando o CSS podemos definir:</p>

            <ul>
                <li> Definir cor para o texto, para o fundo do elemento</li>
                <li>Fontes e tamanhos e letras</li>
                <li>Posicionamentos dos elementos na pagina</li>
                <li>Espaçamento, bordas, sombras, etec . . .</li>
                <li>Efeitos visuais e animações</li>
            </ul>

            <p> 
                O HTML diz o que deve aparecer na pagina, enquanto o CSS diz como deve aparecer.
            </p>

<p className="centro">
    Oscar Piastri na AlpineTeam, saudades 💗
</p>
            <p className="centro2"> 
                <img src="piastrii.jpg" alt="" />
            </p>

            <h3>Fim da Aula</h3>
        </div>
    );
}