import React from 'react';
// import Profile from '../assets/img/say-cheese2.jpg';

function AboutCard() {
  return (
    <div className="about-container">
      <h5>About Me</h5>

      <div>
        <div>
          <p>
            Hi, I'm Noah! I'm a dynamic Full-Stack Web Developer based in
            Austin.
          </p>
          <p>
            Recognized for demonstrating independent discipline, flexibility,
            and a customer-oriented attitude, I have a verifiable history of
            contributing directly to company growth and expansion throughout my
            career. Professional focal points include sales, scheduling, data
            management, server management, OOP, MVC, validation, web formatting,
            responsive design, test driven development, and Github repository
            management and collaboration. Other areas of expertise include
            keynote presentations, proofreading/editing, social media marketing,
            SEO, content management, cross-functional team leadership, complex
            problem-solving, and client relationship management.
          </p>

          <p>
            Proficient in the following programing languages and technologies:
            HTML, CSS, Git, Javascript, JQuery, JSON, Node, SQL, Express,
            Sequelize, Heroku, Handlebars, JEST, Mongoose and MongoDB.
          </p>

          <p>
            In my free time I enjoy spending time with family, the outdoors,
            reading and writing. I play basketball and soccer, as well as
            volunteer to coach and ref kids games at the YMCA.
          </p>

          <p>
            I am interested in learning about new opportunities and can be
            reached through through
            <a
              href="https://www.linkedin.com/in/noah-harbison-5b826752/"
              target="blank"
            >
              Linkedin
            </a>{' '}
            or by email:
            <a href="mailto:nizzyno@icloud.com" target="">
              nizzyno@icloud.com
            </a>
            . A full list of my apps and repositories can be found on{' '}
            <a href="https://www.github.com/nizzyno/" target="blank">
              Github.
            </a>
          </p>
        </div>

        <div className="card-body contactLinks">
          <a
            href="https://www.linkedin.com/in/noah-harbison-5b826752/"
            target="blank"
            className="card-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/nizzyno/"
            target="blank"
            className="card-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
