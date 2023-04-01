import './FunStuff.scss';
import ParticleBall from './items/particle-ball/ParticleBall';
function FunStuff({setPage}) {
	return ( 
		<section id="fun-stuff">
			<span className="close" onClick={() => setPage('home')}>x</span>
			<h3>coming soon</h3>
			<ParticleBall />
		</section>
	 );
}

export default FunStuff;