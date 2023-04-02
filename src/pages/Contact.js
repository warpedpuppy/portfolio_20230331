import BackButton from '../components/BackButton';
import './Contact.scss';
function Contact({setPage}) {
	return ( 
		<section id="contact">
			<BackButton setPage={setPage}/>
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