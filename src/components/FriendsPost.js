import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/maul-4121e18d.webp"
function FriendsPost({darkMode}) {
  

  return (
    <section>
  <div class={`container profile${darkMode ? ' bg-dark' : ' bg-light'}`}>
    <div class="row">
        <div class="col-md-12">
            <div class={`card mb-3 ${darkMode ? ' bg-dark' : ' bg-light'}`}>
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" width="50" class="rounded-circle" /></a>
                        <div class="flex-fill ps-2">
                            <div class="fw-bold"><a href="#" class="text-decoration-none">Jonthy</a> at <a href="#" class="text-decoration-none">Enugu , Nigeria</a></div>
                            <div>
                                <p className=" march">March 16</p></div>
                            
                        </div>
                    </div>

                    <p className="caption ">Best vacation of 2023</p>
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
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
                    <div class="timeline-likes">
                                 <div class="stats-right">
                                    <span class="stats-text">259 Shares</span>
                                    <span class="stats-text">21 Comments</span>
                                 </div>
                                 <div class="stats">
                                    <span class="fa-stack fa-fw stats-icon">
                                    <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                    </span>
                                    <span class="fa-stack fa-fw stats-icon">
                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span class="stats-total">4.3k</span>
                                 </div>
                              </div>

                    <div class="row text-center fw-bold">
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2 march " > <i class="far fa-thumbs-up me-1 d-block d-sm-inline "></i><span className="march">Likes</span>  </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-comment me-1 d-block d-sm-inline"></i><span className="march"> Comment</span> </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="fa fa-share me-1 d-block d-sm-inline"></i> <span className="march">Share</span> </a>
                        </div>
                    </div>
      
                    <hr class="mb-3 mt-1 opacity-1" />
                    <div class="box-footer box-comments">
      <div class="box-comment">
        <img class="img-circle img-sm" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="User Image" />
        <div class={`comment-text ${darkMode ? 'comment-color': ''}`} >
          <span class= {`username ${darkMode ? 'comment-color': ''}`} >
          Maria Gonzales
          <span class="text-muted pull-right">7:03 PM Yesterday</span>
          </span>
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </div>
        <div class="media-body ">
        <ul class="list-inline d-sm-flex my-0">
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                    100
                  </a>
                </li>
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                    50
                  </a>
                </li>
                <li class="list-inline-item ml-auto">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    Reply
                  </a>
                </li>
              </ul>
              </div>
      </div>
      
      <div class="box-comment">
        <img class="img-circle img-sm" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="User Image" />
        <div class={`comment-text ${darkMode ? 'comment-color': ''}`} >
          <span class={`username ${darkMode ? 'comment-color': ''}`}>
          Nora Havisham
          <span class={`text-muted pull-right   ${darkMode ? 'text-white' : 'text-success'}`}>8:03 PM Today</span>
          </span  >
          The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </div>
        <div class="media-body ">
        <ul class="list-inline d-sm-flex my-0">
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                  <span className="">178</span>
                  </a>
                </li>
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                    34
                  </a>
                </li>
                <li class="list-inline-item ml-auto">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    Reply
                  </a>
                </li>
              </ul>
              </div>
      </div>
  
      </div>
      
                    <div class="d-flex align-items-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="35" class="rounded-circle" />
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

        <div class="col-md-12gi">
            <div class={`card  ${darkMode ? ' bg-dark' : ' bg-light'}`}>
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" width="50" class="rounded-circle" /></a>
                        <div class="flex-fill ps-2">
                            <div class="fw-bold"><a href="#" class="text-decoration-none">Clyde Stanley</a> at <a href="#" class="text-decoration-none">United States</a></div>
                            <div class="small text-body text-opacity-50">
                                <p className="march">May 5</p></div>
                        </div>
                    </div>

                    <p className="caption">Business Trip</p>
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
                    <div class="timeline-likes">
                                 <div class="stats-right">
                                    <span class="stats-text">100 Shares</span>
                                    <span class="stats-text">60 Comments</span>
                                 </div>
                                 <div class="stats">
                                    <span class="fa-stack fa-fw stats-icon">
                                    <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                    </span>
                                    <span class="fa-stack fa-fw stats-icon">
                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span class="stats-total">2.3k</span>
                                 </div>
                              </div>
                    <div class="row text-center fw-bold">
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-thumbs-up me-1 d-block d-sm-inline"></i> <span className="march">Likes</span> </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="far fa-comment me-1 d-block d-sm-inline"></i> <span className="march">Comment</span> </a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-body text-opacity-50 text-decoration-none d-block p-2"> <i class="fa fa-share me-1 d-block d-sm-inline"></i> <span className="march">Share</span> </a>
                        </div>
                    </div>
                    <hr class="mt-1 opacity-1" />
                    <div class="d-flex align-items-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="35" class="rounded-circle" />
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
