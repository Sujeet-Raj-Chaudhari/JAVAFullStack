import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService'

const INSTRUCTOR ='Sujeet'
class ListCoursesComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            courses:[],
            messgae:null
        }
        this.refreshCourses=this.refreshCourses.bind(this)
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked =this.addCourseClicked.bind(this)
    }

    componentDidMount(){
        this.refreshCourses();
    }

    refreshCourses(){
        CourseDataService.retrieveAllCourses(INSTRUCTOR)
            .then(
                response =>{
                    console.log(response);
                    this.setState({courses: response.data})
                }
            )
    }

    deleteCourseClicked(id){
        CourseDataService.deletCourse(INSTRUCTOR,id)
            .then(
                response => {
                    this.setState({message: `Delete of course ${id} Successful`})
                    this.refreshCourses()
                }
            )

        
    }

    updateCourseClicked(id)
    {
        console.log('update' + id)
        this.props.history.push(`/courses/${id}`)

        
    }

    addCourseClicked(){
        this.props.history.push(`/courses/-1`)
    }

    render(){
        return(
            <div className="contianer">
                <h3>
                    All Courses
                </h3>

                {this.state.message && <div class ="alert alert-success">{this.state.message}</div>}

                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Update
                                </th>
                                <th>
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    courses => 
                                    <tr key={courses.id}>
                                        <td>{courses.id}</td>
                                        <td>{courses.description}</td>
                                        <td><button className='btn btn-success' onClick={() => this.updateCourseClicked(courses.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(courses.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>  

                <div className='row'>
                    <button className='btn btn-success' onClick={this.addCourseClicked}>Add</button>
                </div>

            </div>
        )
    }
}

export default ListCoursesComponent