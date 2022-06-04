import React from "react";

const reg_res_topic = () => {
return (
<div className="container">
  <div className="header">
    <h4>Register Research Topic</h4>
  </div>
  <form>

    <div className="row">
      <div className="col col-lg-4">
        <label className="form-label">Research Area :</label>
        <input type="text" className="form-control" name="res_area" placeholder="" id="res_area" required />
      </div>
    </div>

    <div className="row">
      <div className="col col-lg-4">
        <label className="form-label">Research Topic :</label>
        <textarea type="text" className="form-control" name="res_topic" placeholder="" id="res_topic" required />
      </div>
    </div>

    <br />
    <div className="row">
      <div className="col col-lg-4">
        
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

export default reg_res_topic;