import React, { Component } from 'react';
import axios from 'axios'
class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
      console.log("response", res)
      this.setState({ posts: res.data })
    }).catch(error => {
      console.log("error", error)
    })
  }
  render() {
    const { posts } = this.state
    return (
      <div>
        {   posts.length ?
          this.state.posts.map(post => 
           
            <div>{post.title}</div>
          ):null
        }
      </div>
    );
  }
}

export default PostList;