import { useState } from 'react';

const estadoInicial = { nome: '', email: '', assunto: '', mensagem: '' };

export default function Contato() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormulario((anterior) => ({ ...anterior, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    setFormulario(estadoInicial);
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <main>
      <div className="contato-container">
        <h2>Envie sua mensagem</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formulario.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="assunto">Assunto:</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={formulario.assunto}
            onChange={handleChange}
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            value={formulario.mensagem}
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar Mensagem</button>
        </form>

        {enviado && (
          <div className="mensagem-sucesso">
            Mensagem enviada com sucesso!
          </div>
        )}
      </div>
    </main>
  );
}
