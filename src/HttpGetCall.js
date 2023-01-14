import axios from 'axios'
import React, { Component } from 'react'

export default class HttpGetCall extends Component {

    constructor(){
      
        super()
        this.state = { posts: [] }
    }
  render() {
    return (
      <div>{ this.state.posts.length ?
          this.state.posts.map(post => 
           
            <div>
                <h1>{post.title}</h1>
                <h1>{post.userId}</h1>
                </div>
           
          ):"data loading"
        }</div>
    )
  }

  componentDidMount(){

    console.log("component did mount")

    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
        console.log("response",response)
        this.setState({ posts: response.data })
    })
  }
}
