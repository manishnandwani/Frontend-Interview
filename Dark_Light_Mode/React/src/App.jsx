import './index.css';
import { ThemeToggleButton } from './ThemeToggleButton';

const App = () => {
  console.log("check")
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">My Website</h1>
        <ThemeToggleButton />
      </header>
      <main className="app-main">
        <h2 className="section-title">Welcome to the Theme Demo</h2>
        <div className="box">
          <p className="description">
            This content automatically adapts to the selected theme. 
            Click the toggle button to switch between light and dark modes.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;