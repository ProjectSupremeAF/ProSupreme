import React from "react";

const reg_std_group = () => {
return (
    
<div className="container">
    <div className="header">
        <h4>Register New student group</h4>
    </div>
    <form >
        
        <div className="row">
        <div><p>Group Leader Details</p></div>
            <div className="col col-lg-4">
                <input type="text" className="form-control" name="fullName01" placeholder="Full Name" id="fullName01" />
            </div>

            <div className="col col-lg-4">
                <input type="text" className="form-control" name="id_number01" placeholder="ITxxxxxxxx"
                    id="id_number01" />
            </div>
        </div>
        <br/>
        <div><p>Group Member - 01 Details</p></div>
        <div className="row">
            <div className="col col-lg-4">                
                <input type="text" className="form-control" name="fullName02" placeholder="Full Name" id="fullName02" />
            </div>

            <div className="col col-lg-4">
                <input type="text" className="form-control" name="id_number02" placeholder="ITxxxxxxxx"
                    id="id_number02" />
            </div>
        </div>

        <div className="row">
        <div><p>Group Member - 02 Details</p></div>
            <div className="col col-lg-4">
                <input type="text" className="form-control" name="fullName03" placeholder="Full Name" id="fullName03" />
            </div>

            <div className="col col-lg-4">
                <input type="text" className="form-control" name="id_number03" placeholder="ITxxxxxxxx"
                    id="id_number03" />
            </div>
        </div>

        <div className="row">
        <div><p>Group Member - 03 Details</p></div>
            <div className="col col-lg-4">
                <input type="text" className="form-control" name="fullName04" placeholder="Full Name" id="fullName04" />
            </div>

            <div className="col col-lg-4">
                <input type="text" className="form-control" name="id_number04" placeholder="ITxxxxxxxx"
                    id="id_number04" />
            </div>
        </div>
        <br/>
        <div className="row" style={{paddingTop: '25px'}}>
            <div className="col col-lg-8" >
                <button type="submit" className="btn btn-success" >
                    Submit 
                </button>
                &nbsp;
                <button type="submit" className="btn btn-primary">
                    Cancel
                </button>
            </div>
        </div>
    </form>
</div>
);
};

export default reg_std_group;