import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMapMarkerAlt,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import img1 from '../images/obi-21c40bfa.webp'
function Post() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center border-bottom">
                <img
                  src={img1} // Replace with the URL of your profile picture
                  alt="Profile Pic"
                  className="rounded-circle profile-pic mr-3"
                  style={{ width: '80px', height: '90px' }}
                />
                
                <input
                  type="text"
                  className="form-control ml-5"
                  placeholder="What's on your mind?"
                  style={{marginLeft:'20px'}}
                />
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="mr-5" >
                  <FontAwesomeIcon icon={faImage} className="" /> Add image
                  </div>
                  <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="" /> Add location
                  </div>
                  <div>
                  <FontAwesomeIcon icon={faUserTag} /> Tag Friends
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
