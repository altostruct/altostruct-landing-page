import * as React from "react";
function AboutUs() {
    const [count, setCount] = React.useState(0);
    function onClick(){
        setCount(count + 1)
    }
  return <div><button style={{backgroundColor:"red"}} onClick={onClick}>clickme</button><h1>Hej Rasmus {count}</h1></div>;
}
export default AboutUs;