import React, { Component } from 'react'
import ListCoursesComponent from './ListCourseComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CourseComponent from './CourseComponent'

class InstructorApp extends Component {
    render() {
        return (
        <Router>
            <>
              <h1>Instructor Application</h1>
              <Routes>
                <Route exact path = "/" Component = {ListCoursesComponent}/>
                <Route exact path ="/courses" Component={ListCoursesComponent}/>
                <Route path="/courses/:id" Component = {CourseComponent}/>
              </Routes>
            </>
        </Router>
        )
    }
}

export default InstructorApp