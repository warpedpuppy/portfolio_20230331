import "./Button.scss";
function BackButton({ setPage, text, link }) {
  return (
    <div className="button-container" onClick={() => setPage(link)}>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 38.09 17.78"
      >
        <path
          class="dog-bone"
          d="m37.09,6.26c0-2.91-2.36-5.26-5.26-5.26-1.98,0-3.7,1.09-4.6,2.71H10.86c-.9-1.62-2.62-2.71-4.6-2.71C3.36,1,1,3.36,1,6.26c0,.96.26,1.86.71,2.63-.45.77-.71,1.67-.71,2.63,0,2.91,2.36,5.26,5.26,5.26,1.98,0,3.7-1.09,4.6-2.71h16.37c.9,1.62,2.62,2.71,4.6,2.71,2.91,0,5.26-2.36,5.26-5.26,0-.96-.26-1.86-.71-2.63.45-.77.71-1.67.71-2.63Z"
        />
      </svg>
      <div className="btn">{text}</div>
    </div>
  );
}

export default BackButton;
