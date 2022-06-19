import s from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
