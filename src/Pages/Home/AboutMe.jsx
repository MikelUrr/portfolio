
import { saveAs } from 'file-saver';
const AboutMe = () => {
  const handleDownloadCV = () => {
    
    const rutaArchivoCV = 'Curriculum_MikelUrrestarazu_portfolio.pdf';

    // Descargar el archivo PDF
    saveAs(rutaArchivoCV, 'MikelUrrestarazuCV');
  };
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/dual-screen-1745705_1920.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm Mikel a Full Stack Developer with a year of coding experience and a background as a Radio Network Optimizer. My coding journey, sparked by a passion for problem-solving, has been an exciting transition from the world of telecommunications to crafting efficient code.
          </p>
          <p className="hero--section-description">
            My professional history in optimizing radio networks has instilled in me a practical mindset that I bring to software development. As you explore my portfolio, you'll discover how I seamlessly integrate my telecommunications background into meaningful and user-friendly solutions.
          </p>
          <p className="hero--section-description">
            As a Full Stack Developer, I specialize in the MERN (MongoDB, Express.js, React, Node.js) and SERN (SQL, Express.js, React, Node.js) stacks. I'm eager to contribute my skills to create something extraordinary together. Let's collaborate and turn ideas into impactful realities.
          </p>
          <p className="hero--section-description">
            Want more? <a className="cvabout" onClick={handleDownloadCV}>Download my CV</a> or connect with me on <a href="https://www.linkedin.com/in/mikel-urrestarazu">LinkedIn </a>
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;