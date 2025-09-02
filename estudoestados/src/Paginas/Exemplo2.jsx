export default function Exemplo2() {
  return (
    <div>
      <h1>Exemplo 2</h1>

      <div className="conteudo"> 
     <h3>Exemplo do useState</h3>

     <p>
      O objetivo será receber o nome do aluno e 2 notas avaliativas.
     </p>
     <form>
      <p> 
        Nome do Aluno: <br />
        <input type="text"/>
      </p>
      <p> 
        Nota 1 <br />
        <input type="text"/>
      </p>
      <p> 
        Nota 2 <br />
        <input type="text"/>
      </p>
      <p> 
        <input type="button" value="calcular"/>
      </p>
     </form>
      </div>

      
    </div>
  );
}
