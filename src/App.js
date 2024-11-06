
import './App.css';
import Header from './components/Header';
import './App.css'
import { useTheme } from './Theme';
import Homepage from './components/Homepage';
function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="App">
      
  <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

<Homepage  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


  
 
   
    </div>
  );
}

export default App;
