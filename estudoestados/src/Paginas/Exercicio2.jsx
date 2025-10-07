import { useState } from "react";

export default function Exercicio2() {
  const [numero, setNumero] = useState(10); 
  const [resultado, setResultado] = useState();

  function calcular() {
    
    let soma = (numero - 32) * 5 / 9;
    setResultado("A temperatura em Celsius é " + soma.toFixed(2)); 
  }

  return (
    <div>
      <h1>Exercicio 2</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite a temperatura em Fahrenheit: <br />
            <input
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)} 
            />
          </p>

          <p>
            <input type="button" value="Converter" onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            Resultado: {resultado}
          </p>
          <a href="/">Voltar</a>
        </form>
      </div>
    </div>
  );
}