import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'ativo' : ''} end>Início</NavLink>
      <NavLink to="/patio" className={({ isActive }) => isActive ? 'ativo' : ''}>Pátio</NavLink>
      <NavLink to="/garagem" className={({ isActive }) => isActive ? 'ativo' : ''}>Garagem</NavLink>
      <NavLink to="/contato" className={({ isActive }) => isActive ? 'ativo' : ''}>Fale Conosco</NavLink>
    </nav>
  );
}
