import React from "react";

export default class TickleBox extends React.Component {
  // mouserOver = () => {
  //     alert("That tickles!");
  // }

  render() {
    return (
      <div
        onMouseOver={this.mouserOver}
        style={{
          border: "4px solid black",
          padding: "10px",
        }}
      >
        Tickle me!
      </div>
    );
  }
}
