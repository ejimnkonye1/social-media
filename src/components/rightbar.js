import React from 'react';

function RightBar({ darkMode, toggleDarkMode }) {
  return (
    <div className="sidebar-right ">
     
     <div className={`card shadow  mt-2 ${darkMode ? ' bg-dark' : ' bg-white'}`}>
        <div className="card-body">
          <h6 className={`card-title   ${darkMode ? 'text-white' : 'text-dark'}`}>Friends Request</h6>
          <ul className="custom-friend-request-list list-unstyled">
  {/* Friend Request 1 */}
  <li className="custom-friend-request-item d-flex  ">
  <img src={'https://bootdey.com/img/Content/avatar/avatar7.png'} alt="Friend Request 1" className="avatar rounded-circle" />
  <div className="custom-friend-request-details p-2 ">
    <div>
      <span className="custom-friend-request-indicator"></span>
      <span className={`custom-friend-name ${darkMode ? 'text-white' : 'text-dark'}`}>Friend Request from Steve</span>
    </div>
    <div className=" d-flex justify-content-between mt-2 ">
      <button className="btn btn-success btn-sm mr-2 confirm">Confirm</button>
      <button className="btn btn-danger btn-sm delete ">Delete</button>
    </div>
  </div>
</li>


  {/* Friend Request 2 */}
  <li className="custom-friend-request-item d-flex mt-2  ">
  <img src={'https://bootdey.com/img/Content/avatar/avatar8.png'} alt="Friend Request 1" className="avatar rounded-circle" />
  <div className="custom-friend-request-details p-2 ">
    <div>
      <span className="custom-friend-request-indicator"></span>
      <span className={`custom-friend-name ${darkMode ? 'text-white' : 'text-dark'}`}>Friend Request from  Jenni</span>
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
      <div className={`card shadow mt-2  ${darkMode ? ' bg-dark' : ' bg-white'}`}>
        <div className="card-body">
          <h6 className={`card-title   ${darkMode ? 'text-white' : 'text-dark'}`}>Online Friends</h6>
          <ul className="list-unstyled">
            {/* Online Friend 1 */}
            <li className="media d-flex align-items-center">
  <img src={'https://bootdey.com/img/Content/avatar/avatar2.png'} alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  <span className="online-badge mr-2"></span>
    <span className="friend-name ml-3">John</span>
    
  </div>
</li>

            {/* Online Friend 2 */}
            
            
            <li className="media d-flex align-items-center mt-2">
  <img src={'https://bootdey.com/img/Content/avatar/avatar3.png'} alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  <span className="online-badge mr-2"></span>
    <span className="friend-name ">Mike</span>
   
  </div>
</li>

     
            
<li className="media d-flex align-items-center mt-2">
  <img src={'https://bootdey.com/img/Content/avatar/avatar4.png'} alt="Online Friend 1" className="mr-3 rounded-circle small-circle-img" />
  <div className="media-body">
  <span className="online-badge lisa"></span>
    <span className="friend-name ">Lisa</span>
   
  </div>
</li>
           
          </ul>
        </div>
      </div>

    

      {/* Latest Activities */}
      <div className={`card shadow  mt-3  ${darkMode ? ' bg-dark' : ' bg-white'}`}>
        <div className="card-body">
          <h6 className={`card-title   ${darkMode ? 'text-white' : 'text-dark'}`}>Latest Activities</h6>
          <ul className="custom-activity-list list-unstyled">
  {/* Activity 1 */}
  <li className="custom-activity-item d-flex align-items-center ">
    <img src={'https://bootdey.com/img/Content/avatar/avatar5.png'} alt="Friend 1" className="custom-avatar rounded-circle" />
    <div className="custom-activity-details ">

      <span className={`custom-activity  ${darkMode ? 'text-white' : 'text-dark'}`}>Willians liked your post.</span>
    </div>
  </li>

  {/* Activity 2 */}
  <li className="custom-activity-item d-flex align-items-center">
    <img src={'https://bootdey.com/img/Content/avatar/avatar6.png'} alt="Friend 2" className="custom-avatar rounded-circle" />
    <div className="custom-activity-details">

      <span className={`custom-activity   ${darkMode ? 'text-white' : 'text-dark'}`}>Jonthy commented on your photo.</span>
    </div>
  </li>
</ul>

        </div>
      </div>
     
    </div>
  );
}

export default RightBar;
