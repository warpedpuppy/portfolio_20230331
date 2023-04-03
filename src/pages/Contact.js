import Button from "../components/Button";
import "./Contact.scss";
function Contact({ setPage }) {
  return (
    <section id="contact">
      <Button setPage={setPage} text="back" link="home" />
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
