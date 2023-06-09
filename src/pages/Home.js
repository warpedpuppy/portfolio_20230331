import Logo from '../components/Logo';
import './Home.scss';
import Button from '../components/Button'
function Home({ setPage }) {
 
  const year = new Date().getFullYear();
  const years = year - 2004;	

  return (
    <section id="home">
      <Logo />
      <div id="home-box">
		<p>I am Ted, a software engineer with {years} years experience.</p>
		<ul>
			<li><Button setPage={setPage} text="c.v." link="CV" /></li>
			<li><Button setPage={setPage} text="contact" link="contact"/></li>
		</ul>
      </div>
    </section>
  );
}

export default Home;
