import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMapMarkerAlt,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import img1 from '../images/obi-21c40bfa.webp'
function Post({ darkMode, toggleDarkMode }) {
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-12 ">
          <div className={`card  ${darkMode ? ' bg-dark' : ' bg-light'}`}>
            <div className="card-body">
              <div className="d-flex align-items-center border-bottom">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  width="50"  
                  alt="Profile Pic"
                  className="rounded-circle profile-pic mr-3 mb-3"
                  style={{ width: '80px', height: '70px' }}
                />
                
                <input
                  type="text"
                  className="form-control ml-5"
                  placeholder="What's on your mind?"
                  style={{marginLeft:'20px'}}
                />
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="mr-5 post-ad text-primary" >
                  <FontAwesomeIcon icon={faImage} className="post-ad text-primary " /> Add image
                  </div>
                  <div className="text-primary">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" /> Add location
                  </div>
                  <div className="text-primary">
                  <FontAwesomeIcon icon={faUserTag} className="text-primary" /> Tag Friends
                </div>
                <button className="btn btn-primary">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
