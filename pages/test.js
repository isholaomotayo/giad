import React from 'react';
import fileSize from '../lib/fileSize';

class Test extends React.Component {
  componentDidMount() {
    fileSize(this.state.url).then(s => this.setState({ size: parseInt(s) }));
  }
  state = {
    size: 0,
    url:
      'https://res.cloudinary.com/omotayo/image/upload/v1574684299/giad/sbku20f1d41nv8tsbibh.jpg'
  };

  render() {
    return (
      <div>
        {this.props.stars}
        Test Data
        {JSON.stringify(this.state.size)}
      </div>
    );
  }
}
export default Test;
