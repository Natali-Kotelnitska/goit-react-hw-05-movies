import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={s.link}>
      {/* <NavLink to="/" className={s.link} activeClassName={s.activeLink}> */}
      Home
    </NavLink>

    {/* <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}> */}
    <NavLink to="/movies" className={s.link}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
