import './FunStuff.scss';
function FunStuff({setPage}) {
	return ( 
		<section id="fun-stuff">
			<span className="close" onClick={() => setPage('home')}>x</span>
			<h3>coming soon</h3>
		</section>
	 );
}

export default FunStuff;