import Button from '../components/Button';
import './CV.scss';
function CV({setPage}) {
  return (
    <section id="cv">
		<Button setPage={setPage} text="back" link="home" />
      <ul>
        <li>Graduated from U.C. Berkeley with Distinction.
			<ul>
				<li>although to clarify, that means the very lowest of honors so I'm not sure that's worthwhile pointing out.</li>
			</ul>
		</li>
        <li>Worked for an educational game company, programming games.</li>
        <li>Worked for an app development company, programming mobile apps.</li>
        <li>
          Coded and maintained a front-end viewed by 17 million people per
          month.
        </li>
        <li>
          Designed and coded six mobile games. Five of which no one played and
          one of which a lot of people played.
        </li>
        <li>Built and managed a subscription based ecommerce site.</li>
        <li>Mentor at multiple technical educational companies.</li>
        <li>
          Worked for a medical company, programming the front-end controls for a
          robot.
        </li>
        <li>Created instructional videos for international coding academy.</li>
        <li>Conducted multiple sponsored webinars on software development.</li>
        <li>
          Completely unrelated to software enginnering, but also attended law
          school and passed two bars.
        </li>
        <li>
          <a
            href="https://github.com/warpedpuppy"
            rel="noopener noreferrer"
            target="_blank"
          >
            github
          </a>{" "}
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edward-ted-walther-98926a8/"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin
          </a>{" "}
        </li>
      </ul>
    </section>
  );
}

export default CV;
