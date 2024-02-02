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
function App() {
  return (
    <div className="App">
      
  <Header />
  
  {/* <div className="containerss">
  <div className="left col-md-3">

    <Sidebar />
  </div>
  <div className="center col-md-6" >

    <HomePage />
    
  </div>
  <div className="right col-md-3" >
   
     <RightBar />
  </div>
</div> */}
<Sidebar />


  
 
   
    </div>
  );
}

export default App;
