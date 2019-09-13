import React from 'react';

const UpdateProfileForm = (props) => {
    const { firstName, lastName, email, profilePhoto } = props.updateUserDataForm;

    return (
        <form className="form-horizontal" onSubmit={props.onSubmit} >
            <div className="form-group">
                <label for="inputName" className="col-sm-2 control-label">First Name</label>

                <div className="col-sm-10">
                    <input name="firstName" type="text" className="form-control" id="inputName" placeholder="First Name" onChange={props.onChange} value={firstName} />
                </div>
            </div>
            <div className="form-group">
                <label for="inputName" className="col-sm-2 control-label">Last Name</label>

                <div className="col-sm-10">
                    <input name="lastName" type="text" className="form-control" id="inputName" placeholder="Last Name" onChange={props.onChange} value={lastName} />
                </div>
            </div>
            <div className="form-group">
                <label for="inputEmail" className="col-sm-2 control-label">Email</label>

                <div className="col-sm-10">
                    <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={props.onChange} value={email} />
                </div>
            </div>
            <div className="form-group">
                <label for="inputEmail" className="col-sm-2 control-label">Photo Url</label>
                
                <div className="col-sm-10">
                    <div className={`ph-item ${ profilePhoto && 'loaded' }`}>
                        <figure className="update-user_profilePhoto">
                            {
                                profilePhoto ?
                                    <img src={profilePhoto} alt="profilePhoto"/>
                                :   <div className="ph-picture" />
                            }
                        </figure>
                    </div>
                    <input name="profilePhoto" type="url" className="form-control" id="inputEmail" placeholder="Photo URL" onChange={props.onChange} value={profilePhoto} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default UpdateProfileForm;