import VeiculoCard from '../components/VeiculoCard';
import { useGaragem } from '../context/GaragemContext';

export default function Patio() {
  const { veiculos, adicionarNaGaragem } = useGaragem();

  return (
    <main>
      <h2>Todos os Veículos</h2>
      <section className="veiculos">
        {veiculos.map((v) => (
          <VeiculoCard
            key={v.id}
            veiculo={v}
            modo="exibicao"
            onAdicionar={adicionarNaGaragem}
          />
        ))}
      </section>
    </main>
  );
}
