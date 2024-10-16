import React from "react";
import ReactDOM from "react-dom";
import htm from "htm";

import Markdown from 'react-markdown'

const html = htm.bind(React.createElement);


export function bind(node, config) {
  return {
    create: (type, props, children) => React.createElement(type, props, ...children),
    render: (element) => ReactDOM.render(element, node),
    unmount: () => ReactDOM.unmountComponentAtNode(node),
  }
}

export function ReactMarkdown(props) {
  // const [count, setCount] = React.useState(0);
  //
  // const updateCount = () => {
  //   const newCount = count + 1;
  //   props.onCountChange(newCount);
  //   setCount(newCount);
  // };


  return (
      <Markdown {...props} />
  );
}
