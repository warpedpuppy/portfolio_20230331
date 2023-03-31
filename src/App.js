
import './App.scss';
import Logo from './components/Logo';
import './animations/animations.scss';
function App() {
  return (
    <div className="App">

		<section id="home">
			<div id="home-box">
				<fieldset><legend>home</legend></fieldset>
				<fieldset><legend>c.v.</legend></fieldset>
				<fieldset><legend>fun stuff</legend></fieldset>
				<fieldset><legend>contact</legend></fieldset>
			</div>
			<Logo />
		</section>
    </div>
  );
}

export default App;
