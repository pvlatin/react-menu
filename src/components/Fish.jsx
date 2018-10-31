import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  state = {};
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h4 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h4>
        <p>{desc}</p>
        <button
          onClick={() => this.props.addToOrder(this.props.index)}
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add to order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
