import VeiculoCard from '../components/VeiculoCard';
import { useGaragem } from '../context/GaragemContext';

export default function Garagem() {
  const { garagem, removerDaGaragem } = useGaragem();

  const total = garagem.reduce((soma, v) => soma + v.preco, 0);
  const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <main>
      <h2>Veículos Selecionados</h2>

      {garagem.length === 0 ? (
        <div className="garagem-vazia">
          <p>Nenhum veículo adicionado à garagem.</p>
        </div>
      ) : (
        <>
          <section className="veiculos">
            {garagem.map((v) => (
              <VeiculoCard
                key={v.id}
                veiculo={v}
                modo="garagem"
                onRemover={removerDaGaragem}
              />
            ))}
          </section>
          <div className="garagem-total">
            <p><strong>Total: {totalFormatado}</strong></p>
          </div>
        </>
      )}
    </main>
  );
}
