import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/maul-4121e18d.webp"
function FriendsPost(props) {
  const { profileImage, friendName, postTime, postContent } = props;

  return (
    <section>
  <div class="container profile">
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" width="50" class="rounded-circle" /></a>
                        <div class="flex-fill ps-2">
                            <div class="fw-bold"><a href="#" class="text-decoration-none">Clyde Stanley</a> at <a href="#" class="text-decoration-none">South Lake Tahoe, California</a></div>
                            <div class="small text-body text-opacity-50">March 16</div>
                        </div>
                    </div>

                    <p>Best vacation of 2023</p>
                    <div class="profile-img-list">
                        <div class="profile-img-list-item main">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar1.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar2.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar3.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar5.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item with-number">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar4.png)' }}></span>
                                <div class="profile-img-number">+12</div>
                            </a>
                        </div>
                    </div>
                    <hr class="mb-1 opacity-1" />

                    <div class="row text-center fw-bold">
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-comment me-1 d-block d-sm-inline"></i> Comment </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="fa fa-share me-1 d-block d-sm-inline"></i> Share </a>
                        </div>
                    </div>
                    <hr class="mb-3 mt-1 opacity-1" />
                    <div class="d-flex align-items-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" width="35" class="rounded-circle" />
                        <div class="flex-fill ps-2">
                            <div class="position-relative d-flex align-items-center">
                                <input type="text" class="form-control rounded-pill bg-white bg-opacity-15" style={{ paddingRight: '120px' }} placeholder="Write a comment..." />
                                <div class="position-absolute end-0 text-center">
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-smile"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-camera"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-video"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-3"><i class="fa fa-paw"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" width="50" class="rounded-circle" /></a>
                        <div class="flex-fill ps-2">
                            <div class="fw-bold"><a href="#" class="text-decoration-none">Clyde Stanley</a> at <a href="#" class="text-decoration-none">United States</a></div>
                            <div class="small text-body text-opacity-50">May 5</div>
                        </div>
                    </div>

                    <p>Business Trip</p>
                    <div class="profile-img-list">
                        <div class="profile-img-list-item main">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar6.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item main">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar7.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar4.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar3.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar2.png)' }}></span>
                            </a>
                        </div>
                        <div class="profile-img-list-item">
                            <a href="#" data-lity="" class="profile-img-list-link">
                            <span className="profile-img-content" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar1.png)' }}></span>
                            </a>
                        </div>
                    </div>
                    <hr class="mb-1 opacity-1" />

                    <div class="row text-center fw-bold">
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-comment me-1 d-block d-sm-inline"></i> Comment </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="fa fa-share me-1 d-block d-sm-inline"></i> Share </a>
                        </div>
                    </div>
                    <hr class="mt-1 opacity-1" />
                    <div class="d-flex align-items-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" width="35" class="rounded-circle" />
                        <div class="flex-fill ps-2">
                            <div class="position-relative d-flex align-items-center">
                                <input type="text" class="form-control rounded-pill bg-white bg-opacity-15" style={{ paddingRight: '120px' }} placeholder="Write a comment..." />
                                <div class="position-absolute end-0 text-center">
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-smile"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-camera"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-2"><i class="fa fa-video"></i></a>
                                    <a href="#" class="text-body text-opacity-50 me-3"><i class="fa fa-paw"></i></a>
                                </div>
                            </div>
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
