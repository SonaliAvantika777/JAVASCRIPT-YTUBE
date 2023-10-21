//object destructuring

const course = {
    courseName : "JavaScript",
    fee : 5000,
    courseInstructor : "Hitesh"
}
//course.courseInstructor
// const {courseInstructor} = course
//console.log(course.courseInstructor);
const {courseInstructor : instructor} = course
console.log(instructor);

// Object in JSON format
{
    "name" : "sonali",
    "place" : "indore",
    "homeTown" : "segwal"
}