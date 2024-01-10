import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appGrid}>
      <Navigation/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Education/>
      <Tools/>
      <Footer/>
    </div>
  );
}

export default App;
