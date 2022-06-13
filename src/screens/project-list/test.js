import React from 'react';
import {useState} from "react"

class Clock extends React.Component {
  abc(){
    return 1
  }
  render() {
    return (
      <div>
        {console.log(this)}
        <h1>Hello, world!</h1>
        <h2></h2>
      </div>
    );
  }
}

const Test1 = () => {
    const [abc,setAbc] = useState({name:'Hello',age:1})
    setAbc({name:'afw'})
    return <div>
        {abc.name}
        {abc.age}
    </div>
}

export {Clock, Test1}