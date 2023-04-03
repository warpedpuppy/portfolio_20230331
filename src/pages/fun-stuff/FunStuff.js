import Button from '../../components/Button';
import './FunStuff.scss';
import ParticleBall from './items/particle-ball/ParticleBall';
function FunStuff({setPage}) {
	return ( 
		<section id="fun-stuff">
			<Button  setPage={setPage}/>
			<h3>fun stuff</h3>
			<p>I have a million and a half mini javascript web games that I want to post here and no time to do it.</p>
			<p>So I just have to beg your patience right now. </p>
			<p> I will get to it, I swear, or my name isn't [fill in something that isn't my name here].</p>
			<ParticleBall />
		</section>
	 );
}

export default FunStuff;