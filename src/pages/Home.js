import Logo from '../components/Logo';
import './Home.scss';
function Home({ setPage }) {
  return (
    <section id="home">
      <Logo />
      <div id="home-box">
        <fieldset>
          <legend>home</legend>
        </fieldset>
        <fieldset>
          <legend onClick={ () => setPage('CV')}>c.v.</legend>
        </fieldset>
        <fieldset>
          <legend onClick={ () => setPage('fun-stuff')}>fun stuff</legend>
        </fieldset>
        <fieldset>
          <legend onClick={ () => setPage('contact')}>contact</legend>
        </fieldset>
      </div>
    </section>
  );
}

export default Home;
