import React from "react";

const WithLogging = (Component) => {
  const wrapped = Component.displayName || Component.name || "Component";
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${wrapped} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${wrapped} is going to unmount`);
    }

    render() {
      <Component {...this.props} />;
    }
  }
  HOC.displayName = `WithLogging(${wrapped})`;
  return HOC;
};

export default WithLogging;