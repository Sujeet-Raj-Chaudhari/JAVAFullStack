import axios from 'axios'

const INSTRUCTOR ="Sujeet"
const COURSE_API_URL = "http://localhost:8080"
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService{
    retrieveAllCourses(name){
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    deletCourse(name, id)
    {
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`)
    }
}
const courseDataServiceInstance = new CourseDataService();
export default courseDataServiceInstance