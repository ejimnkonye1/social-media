import React from "react";

function Stories({darkMode}) {
    return(
        <div class='container mt-5'>
    <div class="row">
        <div class= 'col-lg-12 layout-spacing mt-4'>
            <div class='statbox widget box box-shadow'>
                <div class= {`widget-header ${darkMode ? ' bg-dark' : ' bg-light'}`} >
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            {/* <h4 class="pb-0">Stories</h4> */}
                        </div>
                    </div>
                </div>
                <div class={`widget-content widget-content-area ${darkMode ? ' bg-dark' : ' bg-light'}`} >
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div id="content_1" class="tabcontent story-area"> 
                                <div class="story-container-1">
                                    <div class="single-create-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="single-create-story-bg" alt="" />
                                        <div class="create-story-author">
                                            <i class="fa fa-plus-circle fa-2x text-info"></i>
                                            <p>Create a story</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="single-story-bg" alt="" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                            <p>John</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="single-story-bg" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"  alt=""/>
                                            <p>Mike</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="single-story-bg" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                            <p>Lisa</p>
                                        </div>
                                    </div>
                                     <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="single-story-bg" alt="" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                            <p>William</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="single-story-bg " alt="" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                            <p>Jonthy</p>
                                        </div>
                                    </div>
                                   {/* <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="single-story-bg" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                                            <p>Steve</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" class="single-story-bg" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar8.png" />
                                            <p>Jenni</p>
                                        </div>
                                    </div>
                                    <div class="single-story">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="single-story-bg" />
                                        <div class="story-author">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                                            <p>Sagarika</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )

}
export default Stories;
