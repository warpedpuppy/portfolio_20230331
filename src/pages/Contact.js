import './Contact.scss';
function Contact({setPage}) {
	return ( 
		<section id="contact">
			<span className="close" onClick={() => setPage('home')}>x</span>
			<ul>
			<li>ted</li>
			<li>[@]</li>
			<li>warpedpuppy</li>
			<li>[dot]</li>
			<li>com</li>
			</ul>
		</section>
	 );
}

export default Contact;