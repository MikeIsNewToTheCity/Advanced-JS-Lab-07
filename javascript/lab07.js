/*
    Name: Mike Villeneuve
    Date: 07/07/2022
*/

const init = () => {

    const courseList = [...document.querySelectorAll("#courses li")];

    let newCourses = ['Angular', 'React'];
    let parsedCourses = [];

    courseList.map(course => { 
        parsedCourses.push(course.textContent);
    });

    let completeCourseList = [...parsedCourses, ...newCourses];

    console.log(completeCourseList.join('\r\n'));
    
}


window.onload = init;