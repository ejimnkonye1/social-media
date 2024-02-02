import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/maul-4121e18d.webp"
function FriendsPost(props) {
  const { profileImage, friendName, postTime, postContent } = props;

  return (
    <section>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
              <img
                  src={img1} // Replace with the URL of your profile picture
                  alt="Profile Pic"
                  className="rounded-circle profile-pic mr-3"
                  style={{ width: '80px', height: '60px' }}
                />
                <div className="ml-5" style={{marginLeft:'10px'}}>
                  <h5>{friendName}</h5>
                  <p className="text-muted">{postTime} ago</p>
                </div>
              </div>
              <p className="mt-3">{postContent}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="p-2">
                    
                  <button className="btn btn-link">
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                  </button>
                  <button className="btn btn-link">
                    <FontAwesomeIcon icon={faComment} /> Comment
                  </button>
                  <button className="btn btn-link">
                    <FontAwesomeIcon icon={faShare} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
              <img
                  src={img1} // Replace with the URL of your profile picture
                  alt="Profile Pic"
                  className="rounded-circle profile-pic mr-3"
                  style={{ width: '80px', height: '60px' }}
                />
                <div className="" style={{marginLeft:'10px'}}>
                  <h5>{friendName}</h5>
                  <p className="text-muted">{postTime} ago</p>
                </div>
              </div>
              <p className="mt-3">{postContent}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="p-2">
                    
                  <button className="btn btn-link">
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                  </button>
                  <button className="btn btn-link">
                    <FontAwesomeIcon icon={faComment} /> Comment
                  </button>
                  <button className="btn btn-link">
                    <FontAwesomeIcon icon={faShare} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default FriendsPost;
