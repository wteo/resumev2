import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appGrid}>
      <AboutMe />
      <Education />
      <Header />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
