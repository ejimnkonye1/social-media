
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserFriends,
    faUsers,
    faStore,
    faVideo,
    faPlayCircle,
    faClock,
    faGamepad,
  faCalendar,
  faImages,
  faEnvelope,
  faDashboard,
  faFeed,
  faDatabase

  } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';
  import FriendsPost from './FriendsPost';
import RightBar from './rightbar';
import Stories from './story';
function Homepage ({ darkMode, toggleDarkMode }) {
  

  
  return (
    <div  class= {`container-fluid  ${darkMode ? ' bg-darker' : ' bg-light'}`}>
    <div class="row flex-nowrap">
        <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 d-none d-sm-block">
            <div class=  {`d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100  fixed-sidebar ${darkMode ? ' bg-dark' : ' bg-white'}`}
            >
             
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="media d-flex align-items-center nav-item ">
  <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  
    <span className="friend-names ml-3 text-dar  ">Luke</span>
    
  </div>
</li>
                    
                    <li>
                        <a href="#fr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">   <FontAwesomeIcon icon={faUserFriends} /> Friends</span></a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline"><FontAwesomeIcon icon={faUsers} /> Groups</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#gr" class="nav-link px-0"> <span class="d-none d-sm-inline">Football Arena</span> </a>
                            </li>
                            <li>
                                <a href="#gr" class="nav-link px-0"> <span class="d-none d-sm-inline">Cruise Hq</span> </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">  <FontAwesomeIcon icon={faStore} />  Marketplace</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">    <FontAwesomeIcon icon={faVideo} />  Video</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#gr" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#gr" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline"><FontAwesomeIcon icon={faClock} /> Memories
</span> </a>
                           
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">     <FontAwesomeIcon icon={faCalendar} /> Events</span> </a>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline"> <FontAwesomeIcon icon={faGamepad} /> Gaming</span> </a>
                    </li>
                   
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline"> <FontAwesomeIcon icon={faImages} /> Gallery</span> </a>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">         <FontAwesomeIcon icon={faEnvelope} /> Messages
</span> </a>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">         <FontAwesomeIcon icon={faDashboard} /> Dashboard
</span> </a>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">         <FontAwesomeIcon icon={faFeed} /> Feed
</span> </a>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">         <FontAwesomeIcon icon={faPlayCircle} /> Media
</span> </a>
                    </li>
                    <li>
                        <a href="#gr" class="nav-link px-0 align-middle mb-3">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">         <FontAwesomeIcon icon={faDatabase} /> Ads Manger
</span> </a>
                    </li>
                </ul>
                <hr />
              
            </div>
        </div>
        <div class="col py-3 col-md-7 center" >
            <Stories  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            

<Post darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
<FriendsPost
darkMode={darkMode} toggleDarkMode={toggleDarkMode}
  profileImage="" 
  friendName="John Doe" 
  postTime="1 day" 
  postContent="This is a friend's post content." 
 
/>

        </div>
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 mt-2 " >
        <div className="fixed-right-sidebar ">
            <RightBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {/* Add your scrolling content for the right sidebar here */}
          </div>
        </div>
    </div>
</div>
  );
}

export default Homepage;
