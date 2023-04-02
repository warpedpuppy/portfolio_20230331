import './BackButton.scss';
function BackButton({setPage}) {
	return ( <span className="close" onClick={() => setPage('home')}>x</span> );
}

export default BackButton;