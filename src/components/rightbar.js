import React from 'react';
import img1 from '../images/ok.jpg'
function RightBar() {
  return (
    <div className="sidebar-right">
      <div className="card shadow bg-light" style={{ width: '' }}>
        <div className="card-body">
          <h6 className="card-title">Online Friends</h6>
          <ul className="list-unstyled">
            {/* Online Friend 1 */}
            <li className="media d-flex align-items-center">
  <img src={img1} alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  
    <span className="friend-name ml-3">Friend 1</span>
    <span className="online-badge mr-2"></span>
  </div>
</li>

            {/* Online Friend 2 */}
            <li className="media d-flex align-items-center mt-2">
  <img src={img1} alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  
    <span className="friend-name ml-3">Friend 2</span>
    <span className="online-badge mr-2"></span>
  </div>
</li>
<li className="media d-flex align-items-center mt-2">
  <img src={img1} alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  
    <span className="friend-name ml-3">Friend 3</span>
    <span className="online-badge mr-2"></span>
  </div>
</li>
            {/* Add more online friends as needed */}
          </ul>
        </div>
      </div>

      <div className="card shadow bg-light mt-2" style={{ width: '' }}>
        <div className="card-body">
          <h6 className="card-title">Friends Request</h6>
          <ul className="custom-friend-request-list list-unstyled">
  {/* Friend Request 1 */}
  <li className="custom-friend-request-item d-flex  ">
  <img src={img1} alt="Friend Request 1" className="avatar rounded-circle" />
  <div className="custom-friend-request-details p-2 ">
    <div>
      <span className="custom-friend-request-indicator"></span>
      <span className="custom-friend-name">Friend Request from User 1</span>
    </div>
    <div className=" d-flex justify-content-between mt-2 ">
      <button className="btn btn-success btn-sm mr-2 confirm">Confirm</button>
      <button className="btn btn-danger btn-sm delete ">Delete</button>
    </div>
  </div>
</li>


  {/* Friend Request 2 */}
  <li className="custom-friend-request-item d-flex  ">
  <img src={img1} alt="Friend Request 1" className="avatar rounded-circle" />
  <div className="custom-friend-request-details p-2 ">
    <div>
      <span className="custom-friend-request-indicator"></span>
      <span className="custom-friend-name">Friend Request from User 1</span>
    </div>
    <div className=" d-flex justify-content-between mt-2 ">
      <button className="btn btn-success btn-sm mr-2 confirm">Confirm</button>
      <button className="btn btn-danger btn-sm delete ">Delete</button>
    </div>
  </div>
</li>
  {/* Add more friend requests as needed */}
</ul>

        </div>
      </div>

      {/* Latest Activities */}
      <div className="card shadow bg-white mt-3" style={{ width: '' }}>
        <div className="card-body">
          <h6 className="card-title">Latest Activities</h6>
          <ul className="custom-activity-list list-unstyled">
  {/* Activity 1 */}
  <li className="custom-activity-item d-flex align-items-center ">
    <img src={img1} alt="Friend 1" className="custom-avatar rounded-circle" />
    <div className="custom-activity-details ">
      <span className="custom-friend-name">Friend 1</span> liked your post.
    </div>
  </li>

  {/* Activity 2 */}
  <li className="custom-activity-item d-flex align-items-center">
    <img src={img1} alt="Friend 2" className="custom-avatar rounded-circle" />
    <div className="custom-activity-details">
      <span className="custom-friend-name">Friend 2</span> commented on your photo.
    </div>
  </li>
</ul>

        </div>
      </div>
     
    </div>
  );
}

export default RightBar;
