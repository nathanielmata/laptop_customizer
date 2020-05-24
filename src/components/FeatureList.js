import React, {Component} from 'react';
import FeatureItemList from './FeatureItemList'
import './FeatureList.css'

class FeatureList extends Component {
  static defaultProps = {
    features: {}
  }
  
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>

        {Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <FeatureItemList
                  feature={feature}
                  features={this.props.features}
                  selected={this.props.selected}
                  currency={this.props.currency}
                  updateFeature={this.props.updateFeature} />
              </fieldset>
            );
          })
        }

      </form>
    ); 
  }
}

export default FeatureList;