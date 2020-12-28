import React, { Component } from 'react';

export class Form extends Component {
    render = () => 
    <div className="m-2">
        <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="city">City/Town: </label>
            <input type="text" className="form-control"/>
        </div>
    </div>
}