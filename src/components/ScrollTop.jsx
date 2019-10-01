import * as React from 'react';
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    window.screenTop();
  }

  render() {
    return this.props.children
  }
}

export default ScrollToTop;