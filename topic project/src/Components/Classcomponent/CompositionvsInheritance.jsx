import React, { Component } from 'react'

export default class CompositionvsInheritance extends Component {
  render() {
    return (
      <>
        <FancyBorder title="123">
          Lorem ipsum dolor<b> sit amet consectetur</b> sit amet consectetur adipisicing elit. Iure aspernatur, repellendus, doloribus iusto cum inventore eligendi quis sequi architecto nihil voluptatem blanditiis officiis. Temporibus minus repellendus, cum veritatis reprehenderit aperiam.      </FancyBorder>
      </>
    )
  }
}
function FancyBorder(props) {
  console.log(props);
  return (
    <div style={{ border: "1px solid" }}>

      {props.children}
    </div>



  );
}