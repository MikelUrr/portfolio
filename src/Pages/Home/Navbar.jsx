import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar= () =>{
    const [navActive,setNavActive] =useState(false);

const toogleNav=() =>{
    setNavActive(!navActive)
}
const closeMenu =() =>{
    setNavActive(false)
}

useEffect(() => {
  const handleResize = () => {
      if (window.innerWidth <= 500) {
          closeMenu();
      }
  }
  window.addEventListener("resize", handleResize);
  return () => {
      window.removeEventListener("resize", handleResize);
  }
}, []);

useEffect(() => {
  if (window.innerWidth <= 1200) {
      closeMenu();
  }
}, []);

const handleClick = (event) => {
  // Get the current time
  const currentTime = new Date().toISOString();
  
let url=""
  // Get the URL of the clicked element
  if(!event.currentTarget.href){
   url = event.currentTarget.text
  } else {
     url = event.currentTarget.href;
  }
  
  console.log(url)

  const userAgent = window.navigator
  
  // Make the POST request
  fetch("your_post_url_here", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      time: currentTime,
      clickedUrl: url,
      userinfo: userAgent,
      componentInfo:"Navbar",

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
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo">
        <img src="./img/chain.svg" alt="Mikel Urrestarazu"  /><h2>Mikel Urrestarazu</h2>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toogleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={(event) => {
                closeMenu(event);
                handleClick(event);
              }}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skills--section"
              className="navbar--content"
              
            >
             MySkills
            </Link>
          </li>
          <li>
            <Link
              onClick={(event) => {
                closeMenu(event);
                handleClick(event);
              }}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={(event) => {
                closeMenu(event);
                handleClick(event);
              }}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              onClick={(event) => {
                closeMenu(event);
                handleClick(event);
              }}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="timeline"
              className="navbar--content"
            >
              My journey
            </Link>
          </li>

        </ul>
      </div>
      <Link
        onClick={(event) => {
          closeMenu(event);
          handleClick(event);
        }}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;

