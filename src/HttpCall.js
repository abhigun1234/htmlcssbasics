import React, { Component } from 'react'
import axios from 'axios'
export default class HttpCall extends Component {
    constructor(props){
        super(props)
    this.state = { posts: [] }
    }
  render() {
    const { posts } = this.state
    return (
      <div>
        {   posts.length ?
          this.state.posts.map(post => 
           
            <div>{post.title}</div>
          ):"data loading"
        }
      </div> );
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
        alert("success")
      console.log("response", res)
      this.setState({ posts: res.data })
    }).catch(error => {
        alert("error")
      console.log("error", error)
    })
  }
}
