import React from "react";

class ExploreBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.sendTitle,
      value: this.props.sendValue,
    };
  }

  render() {
    const {title,value} = this.state;

    return (
      <div className="ExploreBox">
        <h1 className="ExploreTitle">{title}</h1>
        <button className="ExploreButton">{value}</button>
      </div>
    );
  }
}
export default ExploreBox;