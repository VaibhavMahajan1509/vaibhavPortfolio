import { useState } from "react";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactSection";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import Footer from "./components/footer/Footer";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import WhyHireMeBox from "./components/navbar/WhyHireMeBox";
import Education from "./components/Education/Education";
import ContactSection from "./components/contactMeSection/ContactSection";

function App() {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleWhyHireClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain onWhyHireClick={handleWhyHireClick} />
      <WhyHireMeBox isVisible={showAnswer} onClose={() => setShowAnswer(false)} />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <Education />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
