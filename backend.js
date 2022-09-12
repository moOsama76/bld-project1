const newFetch = async () => {
    let response = await fetch('http://localhost:3000/courses');
    let json = await response.json();
    return json;
};

newFetch().then((x) => {
    x.forEach(addCourse);
});

console.log(newFetch())



function swap(topic){
    let pythonCourses = document.querySelector(".py");
    let cppCourses = document.querySelector(".cpp");
    let jsCourses = document.querySelector(".js");
    if(topic == 'py'){
        pythonCourses.style.display = ""
        cppCourses.style.display = "none"
        jsCourses.style.display = "none"
    } else if(topic == 'cpp'){
        pythonCourses.style.display = "none"
        cppCourses.style.display = ""
        jsCourses.style.display = "none"
    } else if(topic == 'js'){
        pythonCourses.style.display = "none"
        cppCourses.style.display = "none"
        jsCourses.style.display = ""
    } else if(topic == 'all'){
        pythonCourses.style.display = ""
        cppCourses.style.display = ""
        jsCourses.style.display = ""
    }
}

function addCourse(course){
    let html = ""
    html = `<div class = "course" id = "${course.id}" title="${course.title}" >
                <img class = "courseImg" src = "${course.image}">
                <p class = "courseTxt" style="display: block">${course.title}</p>
                <p class = "courseTxt2" style="display: block">${course.auth}</p>
                <!--<p class = "small">Skills for your present (and your future). Get started with us.</p>-->
            </div>`;
    //console.log(course.topic);
    let pythonCourses = document.querySelector("."+ course.topic);
    pythonCourses.innerHTML += html;
}

function search(){
    //console.log("Fwfew");
    let searchText = document.querySelector(".searchbar").value;
    searchText = searchText.toLowerCase();

    const size = 20;
    for(let id = 1; id <= size; id++){
        let curCourse = document.getElementById(id);
        curCourse.title = curCourse.title.toLowerCase();
        let showCourse = true;
        for(let i = 0; i < Math.min(searchText.length, curCourse.title.length); i++){
            if(searchText.at(i) !== curCourse.title.at(i)){
                showCourse = false;
                break;
            }
        }
        console.log(searchText, curCourse.title, showCourse);
        if(showCourse){
            curCourse.style.display = ""
        } else {
            curCourse.style.display = "none"
        }
    }
}
