import React from 'react';
import router from 'umi/router';

const pathArr = [
  '/blank/test1',
  '/blank/test2',
  '/blank/test3',
  '/blank/test4',
  '/blank/test5',
  '/blank/test6',
];

export default class BlankLayout extends React.Component {
  constructor(props) {
    super(props);
    this.tag = 0;
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tag = ++this.tag > 5 ? 0 : this.tag;
      router.push(pathArr[this.tag]);
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
