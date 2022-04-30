import React, { Component } from 'react';
import axios from 'axios'
class CourseList extends Component {
    constructor() {

        super()
        this.state = { courses: [] }
    }
    componentDidMount() {
        axios.get("https://dronaonlineadmin.herokuapp.com/courses/").then(res => {
            console.log("response", res)
            this.setState({ courses: res.data.courseDetails })
            console.log("courses", this.state.courses)
        }).catch(error => {
            console.log("error", error)
        })
    }
    render() {
        const { courses } = this.state
        return (
            <div>
                <div>
                    {this.state.courses.length ?
                        this.state.courses.map(course =>

                            <div>{course.name}</div>
                        ) : null
                    }
                </div>
            </div>

        );
    }
}

export default CourseList;