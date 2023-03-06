 import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props){
        super(props)
        console.log("constructor calling")
    }
  render() {
      console.log("render function calling")
    return (
       
      <div>LifeCycleMethods</div>
    )
  }
  componentDidMount(){
      console.log("calling component didmount")
  }
  componentDidUpdate(){
      console.log("calling component did update")
  }
  componentDidCatch(){
    console.log("calling component did catch")
  }
  componentWillUnmount(){
    console.log("calling component will unmount")
  }
}

export default LifeCycle