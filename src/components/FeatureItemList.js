import React, {Component} from 'react';
import FeatureItem from './FeatureItem';

class FeatureItemList extends Component {
  render() {
    return (
      <div className="FeatureItemList">

        {this.props.features[this.props.feature].map((item, idx) => {
            return (
              <FeatureItem
                key={item.name + "-" + idx}
                item={item}
                feature={this.props.feature}
                currency={this.props.currency}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature} />
            );
          })
        }

      </div>
    )
  }
}

export default FeatureItemList;