import React, { useState } from 'react';
import BannerHome from './BannerHome';

const Home = () => {
  const [ativo, setAtivo] = useState(true);
  const [dados, setDados] = useState({nome: 'Alana Barbosa'});
  const [items, setItems] = useState(["Item 1", 'Item 2', 'Item 3']);
  const [contador, setContar] = useState(3);

  const handleClick = () => {
    setAtivo(!ativo);
    setDados({...dados, faculdade: "Possui faculdade", profissao: "Engenheira de software"});
    setContar(contador + 1);
    setItems([...items, 'Item ' + (contador + 1)]);
  }

    return (
        <>
          <main>
            <BannerHome 
            titulo="Este é um titulo" 
            subtitulo="Este é um subtitulo">              
            </BannerHome>
            <br />
            <button disabled={!ativo}>
            {ativo ? 'Botão ativado' : 'Botão desativado'}
            </button>
            <br />
            <p>{!ativo ? "Status atual" : "Status depois do useState"}</p>
            <br />
            <p>{dados.nome}</p>
            <p>{dados.faculdade}</p>
            <p>{dados.profissao}</p>
            <br />
            {items.map(item => <li key={item}>{item}</li>)}
            <br />
            <button onClick={handleClick}>Clique aqui</button>
          </main>

        </>
    )
}

export default Home;