import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Estudo de Estados</h1>

      <div className="conteudo">
        <p>
          O useState é um hook do React que permite adicionar e gerenciar estados em componentes funcionais. Com ele, você pode criar variáveis que armazenam valores dinâmicos, como textos, números ou objetos, e atualizar esses valores conforme o usuário interage com a interface. Sempre que o estado muda, o componente é re-renderizado automaticamente para refletir as novas informações na tela.
        </p>

        <ul>
            <li><Link to="/exemplo1">Exemplo 1</Link></li>
            <li><Link to="/exemplo2">Exemplo 2</Link></li>
            <li><Link to="/exercicio1">Exercicio 1</Link></li>
            <li><Link to="/Exercicio2">Exercicio 2</Link></li>
            <li><Link to="/Exercicio3">Exercicio 3</Link></li>
            <li><Link to="/Exercicio4">Exercicio 4</Link></li>
            <li><Link to="/Exercicio5">Exercicio 5</Link></li>
            <li><Link to="/Exercicio6">Exercicio 6</Link></li>
            <li><Link to="/Exercicio7">Exercicio 7</Link></li>
            <li><Link to="/Exercicio8">Exercicio 8</Link></li>
            <li><Link to="/Exercicio9">Exercicio 9</Link></li>
            <li><Link to="/Exercicio10">Exercicio 10</Link></li>
        </ul>
      </div>
    </div>
  );
}
