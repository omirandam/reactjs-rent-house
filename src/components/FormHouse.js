import React from 'react';
import '../assets/css/FormHouse.css';

const house = [{"owner":'',"email":'',"telephone":'',"address":''}];

class FormHouse extends React.Component{

    handleChangeOwner(event) {
        {house[0].owner=event.target.value}
    }
    handleChangeEmail(event) {
        {house[0].email=event.target.value}
    }
    handleChangeTelephone(event) {
        {house[0].telephone=event.target.value}
    }
    handleChangeAddress(event) {
        {house[0].address=event.target.value}
    }
    
    handleClick(event) {
        
        alert({house});
    }

    render(){
        return (
            <div className="form-house row">
             <form className="formHouse">
              <div className="row">
                <div className="col-md-5">
                    <div className="col-md-4 input-group">
                      <label className="label label-form">Owner: </label>
                      <div className="col-md-9">
                         <input type="text" className="form-control" id="ownerText" onChange={this.handleChangeOwner} />
                      </div>
                    </div>
                    <div className="col-md-4 input-group">
                      <label className="label label-form">Email: </label>
                      <div className="col-md-9">
                         <input type="text" className="form-control" id="emailText" onChange={this.handleChangeEmail} />
                      </div>
                    </div>
                    <div className="col-md-4 input-group">
                      <label className="label label-form">Telephone: </label>
                      <div className="col-md-9">
                         <input type="text" className="form-control" id="telephoneText"  onChange={this.handleChangeTelephone}/>
                      </div>
                    </div>
                </div>
                <div className="col-md-4 divAddress">
                   <label className="label label-form label-form-address">Address:</label>
                   <textarea className="form-control" onChange={this.handleChangeAddress}>
                   </textarea>
                </div>
                <div className="col-md-2 divBtnCreate">
                   <button type="button" className="createHouse btn btn-primary" onClick={this.handleClick}>Create</button>
                </div>
              </div>
              
             </form>
              
            </div>
          );
    }
}

export default FormHouse;