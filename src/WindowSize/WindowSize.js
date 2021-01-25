// import React, { useState, useEffect, Component } from "react";
import useWindowSize from "./useWindowSize";

function WindowSize() {
  const { width, height } = useWindowSize();
  return (
    <h2>
      Window size: {width} x {height}
    </h2>
  );
}

// function WindowSize() {
//   const [{ width, height }, setSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });
//   useEffect(() => {
//     const handleResize = () =>
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [setSize]);
//   return (
//     <h2>
//       Window size: {width} x {height}
//     </h2>
//   );
// }

// class WindowSize extends Component {
//   state = {
//     width: window.innerWidth,
//     height: window.innerHeight
//   };
//   handleResize = () => {
//     this.setState({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });
//   };
//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize);
//   }
//   render() {
//     const { width, height } = this.state;
//     return (
//       <h2>
//         Window size: {width} x {height}
//       </h2>
//     );
//   }
// }

export default WindowSize;
