import { createContext, useContext, useState } from 'react';
import { veiculosIniciais } from '../data/veiculos';

const GaragemContext = createContext();

export function GaragemProvider({ children }) {
  const [veiculos, setVeiculos] = useState(veiculosIniciais);
  const [garagem, setGaragem] = useState([]);

  function adicionarVeiculo(novoVeiculo) {
    const id = Date.now();
    setVeiculos((anterior) => [...anterior, { ...novoVeiculo, id }]);
  }

  function editarVeiculo(id, dadosNovos) {
    setVeiculos((anterior) =>
      anterior.map((v) => (v.id === id ? { ...v, ...dadosNovos } : v))
    );
  }

  function excluirVeiculo(id) {
    setVeiculos((anterior) => anterior.filter((v) => v.id !== id));
    setGaragem((anterior) => anterior.filter((v) => v.id !== id));
  }

  function adicionarNaGaragem(veiculo) {
    const jaExiste = garagem.find((v) => v.id === veiculo.id);
    if (!jaExiste) {
      setGaragem((anterior) => [...anterior, veiculo]);
    }
  }

  function removerDaGaragem(id) {
    setGaragem((anterior) => anterior.filter((v) => v.id !== id));
  }

  return (
    <GaragemContext.Provider
      value={{ veiculos, garagem, adicionarVeiculo, editarVeiculo, excluirVeiculo, adicionarNaGaragem, removerDaGaragem }}
    >
      {children}
    </GaragemContext.Provider>
  );
}

export function useGaragem() {
  return useContext(GaragemContext);
}
