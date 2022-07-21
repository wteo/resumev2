import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appGrid}>
      <Education />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
