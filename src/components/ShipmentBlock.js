import React, { Component } from 'react';
import "../css/shipment-block.css";
import deleteIcon from "../icons/delete-icon.png"
import editIcon from "../icons/edit-icon.png"
class ShipmentBlock extends Component {
    componentDidUpdate(){
        console.log(this.props)
    }
    render() {
        return (
            <div  data-test="shipment-block" className={`shipment-block ${this.props.AWB}`}>
                <div>
                    <img src={deleteIcon} className="deleteIconcls" />
                    <img src={editIcon} className="editIconcls" />
                </div>
                <div className="name-container">
                    <span>Name:</span> 
                    <span className="nameValue">{this.props.orderNumber}</span>
                 </div>
                 <div className="id-container">
                    <span>ID:</span> 
                    <span className="idValue">{this.props.id}</span>
                 </div>
                <div className="status-container">
                    <span>Status:</span> 
                    <span className="statusValue">{this.props.AWB}</span>
                </div>
                <div className="more-details-container">
                   <a href={`/shipments/${this.props.id}`} className="more-details-link">View Details</a>
                </div>
            </div>
        );
    }
}

export default ShipmentBlock;