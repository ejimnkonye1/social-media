import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Homepage';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import FriendsPost from './components/FriendsPost';
import RightBar from './components/rightbar';
import img1 from './images/maul-4121e18d.webp'
import './App.css'
import { useTheme } from './Theme';
function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="App">
      
  <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

<Sidebar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


  
 
   
    </div>
  );
}

export default App;
