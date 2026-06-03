import VeiculoCard from '../components/VeiculoCard';
import { useGaragem } from '../context/GaragemContext';

const destaques = [1, 2];

export default function Inicio() {
  const { veiculos, adicionarNaGaragem } = useGaragem();
  const veiculosDestaque = veiculos.filter((v) => destaques.includes(v.id));

  return (
    <>
      <div className="destaque">
        <main>
          <h2>Veículos em Destaque</h2>
          <section className="veiculos">
            {veiculosDestaque.map((v) => (
              <VeiculoCard
                key={v.id}
                veiculo={v}
                modo="exibicao"
                onAdicionar={adicionarNaGaragem}
              />
            ))}
          </section>
        </main>
      </div>

      <section className="noticia">
        <h2>Últimas Notícias</h2>
        <article className="noticia-card">
          <h3>Novo Modelo Lançado</h3>
          <p>Apresentamos o Sedan BYD Seal, elétrico com tecnologia de ponta!</p>
        </article>
        <article className="noticia-card">
          <h3>Promoção Especial</h3>
          <p>Descontos de até 20% em veículos seminovos este mês.</p>
        </article>
        <article className="noticia-card">
          <h3>Entrega Gratuita</h3>
          <p>Frete grátis para compras acima de R$ 50.000.</p>
        </article>
      </section>
    </>
  );
}
