import { Link } from "react-scroll";
import { saveAs } from 'file-saver';

const HeroSection = () => {
  const handleDownloadCV = () => {
    
    const rutaArchivoCV = 'Curriculum_MikelUrrestarazu_portfolio.pdf';

    // Descargar el archivo PDF
    saveAs(rutaArchivoCV, 'MikelUrrestarazuCV');
  };

    // Function to handle the click event
    const handleClick = (event) => {
      // Get the current time
      const currentTime = new Date().toISOString();
      
    
      const userAgent = window.navigator
      
      // Make the POST request
      fetch("your_post_url_here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          time: currentTime,
          clickedUrl: "Contact",
          userinfo: userAgent,
          componentInfo:"HeroSection",
  
        }),
      })
        .then((response) => {
          // Handle the response if needed
          console.log("POST request successful", response);
        })
        .catch((error) => {
          // Handle errors if any
          console.error("Error making POST request", error);
        });
      };
    return (
        <section id="heroSection" className="hero--section">
          <div className="hero--section--content--box">
            <div className="hero--section--content">
              <p className="section--title">Hey, I'm Mikel</p>
              <h1 className="hero--section--title">
                <span className="hero--section-title--color">Full Stack</span>{" "}
                <br />
                Developer            
              </h1>
              <p className="hero--section-description">
              Passionate about contributing my skills to meaningful projects. 
                <br /> Explore my portfolio to see how I turn my love for coding into practical solutions. Let's create something great together.🚀
              </p>
            </div>
            <div className="hero--buttons">
            <button className="btn btn-primary"> <Link
            
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            onClick={handleClick}
            
          >
            Get in Touch
          </Link></button>
          <button className="btn btn-primary"
          onClick={handleDownloadCV}> Get my CV</button>
          </div>
          </div>
          <div className="hero--section--img">
            <img src="./img/foto1.jpeg" alt="Hero Section" />
          </div>
        </section>
      );
}


export default HeroSection;
