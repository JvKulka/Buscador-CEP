import { FiSearch } from "react-icons/fi";
import "./style.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscado de CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 83606598</h2>
        <span>Rua Teste</span>
        <span>Complemento: casa</span>
        <span>Loteamento Helvídia</span>
        <span>Campo Largo - PR</span>
      </main>
    </div>
  );
}

export default App;
