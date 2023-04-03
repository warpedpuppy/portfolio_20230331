import './BackButton.scss';
function BackButton({setPage}) {
	return ( <span className="close" onClick={() => setPage('home')}>back</span> );
}

export default BackButton;