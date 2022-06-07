import s from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
