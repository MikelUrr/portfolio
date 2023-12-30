import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonial";
import ContactMe from "../ConctacMe";
import Footer from "../Footer";
import Timeline from "../Timeline";

const Home = () => {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />  
            <Timeline />
            <ContactMe />
            <Footer />
        </>
    );
};

export default Home;