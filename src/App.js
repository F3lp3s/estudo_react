import { useEffect, useState } from "react";
import FilmeCard from "./FilmeCard";
import './App.css';
import icone from './search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=1ff2f0be&'

const App = () => {
  const [filmes, setFilmes] = useState([]);
  const [procura, setProcura] = useState('')

  const procurarFilme = async (titulo) => {
    const resposta = await fetch(`${API_URL}&s=${titulo}`);
    const data = await resposta.json(); 

    setFilmes(data.Search)
  } 

  useEffect(() => {
    procurarFilme('percy')
  }, [])

  return(
    <div className="app">
      <h1>Filminho em react</h1>

      <div className="search">
        <input placeholder="Procurar filme" value={procura} onChange={(e) => setProcura(e.target.value)}/>
        <img src={icone} alt="procurar" onClick={() => procurarFilme(procura)}/>
      </div> 

      {filmes.length > 0 
        ? (      
          <div className="container">
            {filmes.map((filme) => (
              <FilmeCard filme1={filme}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Sem resultados</h2>
          </div>
        )}

    </div>
  );
}
 
export default App;