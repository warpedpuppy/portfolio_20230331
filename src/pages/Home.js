import Logo from '../components/Logo';
import './Home.scss';
function Home({ setPage }) {
 
  const year = new Date().getFullYear();
  const years = year - 2004;	

  return (
    <section id="home">
      <Logo />
      <div id="home-box">
		<p>I am Ted, a software engineer with {years} years experience.</p>
		<ul>
			<li><h3 onClick={ () => setPage('CV')}>c.v.</h3></li>
			<li><h3 onClick={ () => setPage('contact')}>contact</h3></li>
		</ul>
      </div>
    </section>
  );
}

export default Home;
