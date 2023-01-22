import React, { Component } from 'react'

export default class extends Component {
    constructor(){
        super()
        this.state={userId:'',title:'',body:''}

    }
    getUpdatatedData=(e)=>{

    }
  render() {
    const {data}=this.state
    return (
      <div>
            <form>
                        <div>
                            <input type="text" name="userId" onChange={getUpdatatedData}></input>
                            <input type="text" name="title" onChange={getUpdatatedData}></input>
                            <input type="text" name="body" onChange={getUpdatatedData}></input>
                            
                        </div>
            </form>
      </div>
    )
  }
}
