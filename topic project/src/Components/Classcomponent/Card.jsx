import React, { Component } from 'react';

class Card extends Component {
    render(props) {
        return (
            <>
               <div className="card">
            <img style = {this.props.style}src={this.props.img} className="card-img-top" alt="Fissure in Sandstone" />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.descreption}</p>
              <a href="#!" className="btn btn-primary">Button</a>
            </div>
          </div>  
            </>
        );
    }
}

export default Card;