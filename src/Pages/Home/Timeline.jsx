import React from 'react';

const Timeline = () => {
  return (
    <section className='timeline--section'>
      <p className="sub--title">The Bootcamp Journey Through Projects</p>
      <h2 className="sections--heading">My Dev Journey</h2>
      <section className="timeline">
        <section className="timelinecontainer left">
          <section className="date">30 Nov</section>
          <i className="icon fa fa-home"></i>
          <section className="content">
            <h2 className='journeytitle'>Initiating React: Bundesliga Data Showcase</h2>
            <p>
              After several mini-projects, this is my first project using React. Starting from the Bundesliga API, I created a data sample in several components and routes. <br />
              <a href="https://github.com/MikelUrr/react_bundesliga" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
            </p>
            <a className='smalllink' href="https://github.com/MikelUrr/react_bundesliga" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
          </section>
        </section>
        <section className="timelinecontainer right">
          <section className="date">24 Nov</section>
          <i className="icon fa fa-gift"></i>
          <section className="content">
            <h2 className='journeytitle'>My First API</h2>
            <p>
              Inheriting the code from the previous work, I created a small API to manage blog entries. I added an option to upload and read massive entries by CSV. It's still under development. <br />
              <a href="https://github.com/MikelUrr/node_api/tree/dev" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
            </p>
            <a  className='smalllink' href="https://github.com/MikelUrr/node_api/tree/dev" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
          </section>
        </section>
        <section className="timelinecontainer left">
          <section className="date">18 Nov</section>
          <i className="icon fa fa-user"></i>
          <section className="content">
            <h2 className='journeytitle'>ExploreNYC360</h2>
            <p>
              My first backend project was an app to travel to NYC with a flight booking option, image translator, and blog. It has a blog post management and user management system. <br />
              <a href="https://github.com/MikelUrr/node_ExploreNYC360" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
            </p>
            <a className='smalllink' href="https://github.com/MikelUrr/node_ExploreNYC360" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
          </section>
        </section>
        <section className="timelinecontainer right">
          <section className="date">7 Nov</section>
          <i className="icon fa fa-running"></i>
          <section className="content">
            <h2 className='journeytitle'>First Approach to Backend</h2>
            <p>
              This was my first group project using Node and Express, creating a management app for an animal protection organization. The views were rendered with Pug. <br />
              <a href="https://github.com/MikelUrr/backend_equipos_protectora" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
            </p>
            <a className="smalllink" href="https://github.com/MikelUrr/backend_equipos_protectora" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
          </section>
        </section>
        <section className="timelinecontainer left">
          <section className="date">24 Oct</section>
          <i className="icon fa fa-cog"></i>
          <section className="content">
            <h2 className='journeytitle'>My First Project Using JavaScript</h2>
            <p>
              In my first JavaScript project, I created an app to search for holiday destinations, giving suggestions about the best time to travel. <br />
              <a  href="https://github.com/MikelUrr/TripPulse" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
            </p>
            <a className="smalllink" href="https://github.com/MikelUrr/TripPulse" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
          </section>
        </section>
        <section className="timelinecontainer right">
          <section className="date">26 Sept</section>
          <i className="icon fa fa-certificate"></i>
          <section className="content">
            <h2 className='journeytitle'>My First Project</h2>
            
            <p>
              This was my first project, a landing page created solely using HTML and CSS. <br /> <a href="https://github.com/MikelUrr/landing_page_final" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
            </p>
            <a className="smalllink" href="https://github.com/MikelUrr/landing_page_final" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Timeline;
