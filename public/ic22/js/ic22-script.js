// IC22 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

/**
What is the difference between db.all() and db.get()? When would you use each?

A classmate writes 'SELECT * FROM students WHERE id = ' + id in a route handler. What is wrong with this, and what would happen if someone sent the value 1; DROP TABLE students as the ID?

Visiting /ic22/students/2 and /ic22/students/7 both work from a single route definition — router.get('/students/:id', ...). How does Express handle that?

 */


// load every student when page opens

async function loadStudents(){
    const response = await fetch('/ic22/students');
    const students = await response.json();


    const list = document.getElementById('student-list');
    list.innerHTML = ''; 

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.first_name} ${student.last_name} - ${student.classification}, ${student.major}`;
        list.appendChild(li);

    });
}



document.getElementById('lookup-btn').addEventListener('click', async () => {
    const id = document.getElementById('student-id').value;
    const result = document.getElementById('student-result');


    const response = await fetch(`/ic22/students/${id}`);
    const student = await response.json();

    if (student.message){
        result.textContent = student.message;
    }else{
        result.textContent = `${student.first_name} ${student.last_name} - ${student.classification}, ${student.major}`;
    }

});

loadStudents();