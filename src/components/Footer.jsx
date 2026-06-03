import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <p>Desenvolvido por: Lucas Antunes Campos | Telefone: (31) 98765-4321 | Email: aluno@newtonpaivawyden.edu</p>
      <p><Link to="/admin" style={{ color: '#aaa', fontSize: '0.8rem' }}>Administração</Link></p>
    </footer>
  );
}
