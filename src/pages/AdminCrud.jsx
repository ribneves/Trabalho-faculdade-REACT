import { useState } from 'react';
import { useGaragem } from '../context/GaragemContext';

const formularioVazio = { nome: '', descricao: '', preco: '', imagem: '' };

export default function AdminCrud() {
  const { veiculos, adicionarVeiculo, editarVeiculo, excluirVeiculo } = useGaragem();
  const [formulario, setFormulario] = useState(formularioVazio);
  const [editandoId, setEditandoId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormulario((anterior) => ({ ...anterior, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dadosVeiculo = { ...formulario, preco: Number(formulario.preco) };

    if (editandoId !== null) {
      editarVeiculo(editandoId, dadosVeiculo);
      setEditandoId(null);
    } else {
      adicionarVeiculo(dadosVeiculo);
    }

    setFormulario(formularioVazio);
  }

  function handleEditar(veiculo) {
    setEditandoId(veiculo.id);
    setFormulario({
      nome: veiculo.nome,
      descricao: veiculo.descricao,
      preco: veiculo.preco,
      imagem: veiculo.imagem,
    });
  }

  function handleExcluir(id) {
    if (window.confirm('Deseja realmente excluir este veículo?')) {
      excluirVeiculo(id);
    }
  }

  function handleCancelar() {
    setEditandoId(null);
    setFormulario(formularioVazio);
  }

  return (
    <main>
      <div className="admin-container">
        <h2>Administração de Veículos</h2>

        <div className="admin-form">
          <h3>{editandoId !== null ? 'Editar Veículo' : 'Cadastrar Novo Veículo'}</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome do Veículo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formulario.nome}
              onChange={handleChange}
              required
            />

            <label htmlFor="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={formulario.descricao}
              onChange={handleChange}
            />

            <label htmlFor="preco">Preço (R$):</label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={formulario.preco}
              onChange={handleChange}
              required
              min="0"
            />

            <label htmlFor="imagem">Caminho da Imagem:</label>
            <input
              type="text"
              id="imagem"
              name="imagem"
              value={formulario.imagem}
              onChange={handleChange}
              placeholder="/img/nome-do-arquivo.jpg"
            />

            <div>
              <button type="submit">
                {editandoId !== null ? 'Salvar Alterações' : 'Cadastrar Veículo'}
              </button>
              {editandoId !== null && (
                <button type="button" className="btn-cancelar" onClick={handleCancelar}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        <h3>Veículos Cadastrados</h3>
        <table className="admin-tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((v) => (
              <tr key={v.id}>
                <td>{v.nome}</td>
                <td>{v.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>
                  <button className="btn-editar" onClick={() => handleEditar(v)}>Editar</button>
                  <button className="btn-excluir" onClick={() => handleExcluir(v.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
