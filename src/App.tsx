import styles from './App.module.css';

const App = () => {
  return (
    <>
      <h1 className={styles.heading}>It's a React app!</h1>
      <p>A starting place to create something... cool?</p>
      <p className={styles.muted}>
        React + TypeScript + CSS Modules + ESLint + Prettier + Vite
      </p>
    </>
  );
};

export default App;
