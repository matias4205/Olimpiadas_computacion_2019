import React from 'react';

const UpdateProfileForm = (props) => {
    const { firstName, lastName, email, profilePhoto } = props;

    return (
        <form class="form-horizontal" onSubmit={props.onSubmit} >
            <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">First Name</label>

                <div class="col-sm-10">
                    <input name="firstName" type="text" class="form-control" id="inputName" placeholder="First Name" onChange={props.onChange} value={firstName} />
                </div>
            </div>
            <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">Last Name</label>

                <div class="col-sm-10">
                    <input name="lastName" type="text" class="form-control" id="inputName" placeholder="Last Name" onChange={props.onChange} value={lastName} />
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                <div class="col-sm-10">
                    <input name="email" type="email" class="form-control" id="inputEmail" placeholder="Email" onChange={props.onChange} value={email} />
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail" class="col-sm-2 control-label">Photo Url</label>
                
                <div class="col-sm-10">
                    <div className={`ph-item ${ profilePhoto && 'loaded' }`}>
                        <figure className="update-user_profilePhoto">
                            {
                                profilePhoto ?
                                    <img src={profilePhoto} alt="profilePhoto"/>
                                :   <div className="ph-picture" />
                            }
                        </figure>
                    </div>
                    <input name="profilePhoto" type="url" class="form-control" id="inputEmail" placeholder="Photo URL" onChange={props.onChange} value={profilePhoto} />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default UpdateProfileForm;