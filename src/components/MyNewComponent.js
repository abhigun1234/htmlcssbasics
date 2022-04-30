import React, { Component } from 'react'
import axios from 'axios'
export default class MyNewComponent extends Component {
    constructor(props){
    super(props)
    this.state = { posts: [] }
    }
  render() {
      posts=[]
    //   const { posts } = this.state
    return (
      <div>

          {
              this.state.posts.map(post=>{
                  {
                    //   <ul>
                    //       <li>
                    //           {post.title}
                    //       </li>
                    //   </ul>
                    <div>
                        {post.title}
                    </div>
                  }
              })
          }
      </div>
    )
  }
  componentDidMount(){
    // here we can do the http cpmmunication  

    axios.get('http://jsonplaceholder.typicode.com/posts').then(response=>{
    console.log("response",response)   
     this.setState({posts:response.data})

       

    }).catch(error=>{
        console.log("error",error)
    })
  }
}
