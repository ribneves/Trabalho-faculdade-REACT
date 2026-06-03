export default function VeiculoCard({ veiculo, modo, onAdicionar, onRemover, onEditar, onExcluir }) {
  const precoFormatado = veiculo.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <article className="veiculo-card">
      <img src={veiculo.imagem} alt={veiculo.nome} />
      <h3>{veiculo.nome}</h3>
      <p>{veiculo.descricao}</p>
      <p>Preço: {precoFormatado}</p>

      {modo === 'exibicao' && (
        <button className="btn-adicionar" onClick={() => onAdicionar(veiculo)}>
          Adicionar à garagem
        </button>
      )}

      {modo === 'garagem' && (
        <button className="btn-remover" onClick={() => onRemover(veiculo.id)}>
          Remover da garagem
        </button>
      )}

      {modo === 'admin' && (
        <div>
          <button className="btn-editar" onClick={() => onEditar(veiculo)}>Editar</button>
          <button className="btn-excluir" onClick={() => onExcluir(veiculo.id)}>Excluir</button>
        </div>
      )}
    </article>
  );
}
