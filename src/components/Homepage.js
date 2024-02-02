import React from "react";
import img1 from '../images/luke-88288006.webp'
import img2 from '../images/maul-4121e18d.webp'
import img3 from '../images/ahsoka-3d651f8d.webp'
import Post from './Post'
import FriendsPost from "./FriendsPost";
import Sidebar from "./Sidebar";
import RightBar from "./rightbar";
function HomePage() {
  return (
    <div className="container  mt-3">
      <div className="row">
        <div className="col-md-1 align-self-start order ">
       <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="col-md-12">

      {/* <div className="col-md-3 mb-3" style={{}}>
  <div className="card" style={{ width: '180px', height: '250px', position: 'relative' }}>
    <img src={img3} className="card-img-top" alt="Card 4" height={'300px'} />
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px',
        textAlign: 'center',
      }}
    >
      Username
    </div>
  </div>
  
</div>

        <div className="col-md-3">
  <div className="card" style={{ width: '180px', height: '250px', position: 'relative' }}>
    <img src={img1} className="card-img-top" alt="Card 4" height={'300px'} />
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px',
        textAlign: 'center',
      }}
    >
      Username
    </div>
  </div>
</div>

        <div className="col-md-3">
  <div className="card" style={{ width: '180px', height: '250px', position: 'relative' }}>
    <img src={img2} className="card-img-top" alt="Card 4" height={'300px'} />
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px',
        textAlign: 'center',
      }}
    >
      Username
    </div>
  </div>
</div>

        <div className="col-md-3">
  <div className="card" style={{ width: '180px', height: '250px', position: 'relative' }}>
    <img src={img3} className="card-img-top" alt="Card 4" height={'300px'} />
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px',
        textAlign: 'center',
      }}
    >
      Username
    </div>
  </div>
</div> */}
</div>
     <Post />
  <FriendsPost
        profileImage="" // Replace with the URL of the friend's profile image
        friendName="John Doe" // Replace with the friend's name
        postTime="1 day" // Replace with the post timestamp
        postContent="This is a friend's post content." // Replace with the post content
      />
      
</div>
<div className="col-md-1">
  <RightBar />
</div>
      </div>
 
    </div>
  );
}

export default HomePage;
