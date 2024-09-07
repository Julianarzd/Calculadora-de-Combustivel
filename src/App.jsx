import { useState } from 'react';
import Logo from "./Logo.png";
import './App.css';

export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [mensagem, setMensagem] = useState('');

  const calcularValor = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!precoAlcool || !precoGasolina) {
      setMensagem('Por favor, insira os valores');
      return;
    }

    const proporcao = precoAlcool / precoGasolina;

    if (proporcao < 0.7) {
      setMensagem('Melhor abastecer com álcool.');
    } else {
      setMensagem('Melhor abastecer com gasolina.');
    }
  };

  return (
    <div>
      <header>
        <img src={Logo} alt="logo" id='logo' />
        <h1>Qual será a melhor opção? </h1>
      </header>

      <div className="container">
        <label htmlFor="alcool">Álcool (preço por litro)</label>
        <input
          id="alcool"
          type="number"
          value={alcool}
          onChange={(e) => setAlcool(e.target.value)}
        />

        <label htmlFor="gasolina">Gasolina (preço por litro)</label>
        <input
          id="gasolina"
          type="number"
          value={gasolina}
          onChange={(e) => setGasolina(e.target.value)}
        />
      </div>

      <div className="entbutton">
        <button onClick={calcularValor}>Calcular</button>
      </div>

      <div>
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}
