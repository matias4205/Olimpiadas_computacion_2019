import React from 'react';

const UserDataAndConfig = (props) => {
    return (
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#activity" data-toggle="tab" aria-expanded="true">Activity</a></li>
                <li class=""><a href="#settings" data-toggle="tab" aria-expanded="false">Settings</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="activity">
                    <ul class="timeline timeline-inverse">
                    <li class="time-label">
                            <span class="bg-red">
                            10 Feb. 2014
                            </span>
                    </li>
                    <li>
                        <i class="fa fa-envelope bg-blue"></i>

                        <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

                        <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                        <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                        </div>
                        <div class="timeline-footer">
                            <a class="btn btn-primary btn-xs">Read more</a>
                            <a class="btn btn-danger btn-xs">Delete</a>
                        </div>
                        </div>
                    </li>
                    <li>
                        <i class="fa fa-user bg-aqua"></i>

                        <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

                        <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                        </h3>
                        </div>
                    </li>
                    <li>
                        <i class="fa fa-comments bg-yellow"></i>

                        <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

                        <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                        <div class="timeline-body">
                            Take me to your leader!
                            Switzerland is small and neutral!
                            We are more like Germany, ambitious and misunderstood!
                        </div>
                        <div class="timeline-footer">
                            <a class="btn btn-warning btn-flat btn-xs">View comment</a>
                        </div>
                        </div>
                    </li>
                    <li class="time-label">
                            <span class="bg-green">
                            3 Jan. 2014
                            </span>
                    </li>
                    <li>
                        <i class="fa fa-camera bg-purple"></i>

                        <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

                        <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                        <div class="timeline-body">
                            <img src="http://placehold.it/150x100" alt="..." class="margin" />
                            <img src="http://placehold.it/150x100" alt="..." class="margin" />
                            <img src="http://placehold.it/150x100" alt="..." class="margin" />
                            <img src="http://placehold.it/150x100" alt="..." class="margin" />
                        </div>
                        </div>
                    </li>
                    <li>
                        <i class="fa fa-clock-o bg-gray"></i>
                    </li>
                    </ul>
                </div>
                <div class="tab-pane" id="settings">
                    <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Name</label>

                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputName" placeholder="Name" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Name</label>

                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputName" placeholder="Name" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputExperience" class="col-sm-2 control-label">Experience</label>

                        <div class="col-sm-10">
                        <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputSkills" class="col-sm-2 control-label">Skills</label>

                        <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSkills" placeholder="Skills" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-danger">Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDataAndConfig;