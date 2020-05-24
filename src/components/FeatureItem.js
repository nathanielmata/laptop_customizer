import React, {Component} from 'react';
import './FeatureItem.css'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class FeatureItem extends Component { 
  render() {
    const itemHash = slugify(JSON.stringify(this.props.item.name));
    // console.log(this.props.item);
    // console.log(this.props.feature);
    return (      
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selected[this.props.feature].name}
          onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
        />
          
        <label htmlFor={itemHash} className="feature__label">
          {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureItem;