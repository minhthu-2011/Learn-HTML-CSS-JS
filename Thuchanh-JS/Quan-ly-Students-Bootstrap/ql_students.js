function resetInput() {
    document.getElementById('fullname').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('age').value = '';
    document.getElementById('math_score').value = '';
    document.getElementById('physics_score').value = '';
    document.getElementById('chemistry_score').value = '';
}

function loginNext() {
    location.assign("signin.html");
}

function getStudentForm() {
    let fullname = document.getElementById('fullname').value;
    let fullnameStr = fullname.split(' ');
    let name = fullnameStr[fullnameStr.length - 1];

    let gender = '';
    if(document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if(document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    let age = document.getElementById('age').value;
    let mathScores = document.getElementById('math_score').value;
    let physicsScores = document.getElementById('physics_score').value;
    let chemistryScores = document.getElementById('chemistry_score').value;
    let student = {
        fullname: fullname,
        name: name,
        gender: gender,
        age: age,
        mathScores: mathScores,
        physicsScores: physicsScores,
        chemistryScores: chemistryScores
    }
    return student;
}

function saveStudent() {
    let student = getStudentForm();
    let checkSV = checkStudent(student);
    if(checkSV == true){
        saveStudentLS(student);
        renderListStudent();
        resetInput();
    }
}

function checkStudent(student) {
    let fullname = student.fullname;
    let gender = student.gender;
    let age = student.age;
    let mathScores = student.mathScores;
    let physicsScores = student.physicsScores;
    let chemistryScores = student.chemistryScores;
    let flag = true;
    if(_.isEmpty(fullname)) {
        document.getElementById('fullnameError').innerHTML = 'Vui lòng nhập họ và tên';
        flag = false;
    } else if(fullname.trim().length < 6) {
        fullnameError.innerText = `Vui lòng nhập họ tên lớn hơn 6 ký tự`;
        flag = false;
    } else if(fullname.trim().length > 50) {
        fullnameError.innerText = `Vui lòng không nhập quá 50 ký tự`;
        flag = false;
    }else {
        document.getElementById('fullnameError').innerHTML = '';
    }

    //Kiểm tra đk rỗng gender
    if(_.isEmpty(gender)) {
        document.getElementById('genderError').innerHTML = 'Vui lòng chọn giới tính';
        flag = false;
    } else {
        document.getElementById('genderError').innerHTML = '';
    }

    //Kiểm tra tuổi
    if(_.isEmpty(age)) {
        document.getElementById('ageError').innerHTML = 'Vui lòng nhập tuổi sinh viên';
        flag = false;
    } else if(age.trim().length > 2) {
        age = '';
        document.getElementById('ageError').innerHTML = 'Vui lòng nhập đúng số tuổi';
        flag = false;
    } else {
        document.getElementById('ageError').innerHTML = '';
    }

    //Kiểm tra điểm toán
    if(_.isEmpty(mathScores)) {
        document.getElementById('mathError').innerHTML = 'Vui lòng nhập điểm toán của sinh viên';
        flag = false;
    } else if(mathScores > 10) {
        mathScores = '';
        document.getElementById('mathError').innerHTML = 'Vui lòng nhập số điểm <= 10';
        flag = false;
    } else {
        document.getElementById('mathError').innerHTML = '';
    }

    //Kiểm tra điểm lý
    if(_.isEmpty(physicsScores)) {
        document.getElementById('physicsError').innerHTML = 'Vui lòng nhập điểm lý của sinh viên';
        flag = false;
    } else if(physicsScores > 10) {
        physicsScores = '';
        document.getElementById('physicsError').innerHTML = 'Vui lòng nhập số điểm <= 10';
        flag = false;
    } else {
        document.getElementById('physicsError').innerHTML = '';
    }

    //Kiểm tra điểm hóa
    if(_.isEmpty(chemistryScores)) {
        document.getElementById('chemistryError').innerHTML = 'Vui lòng nhập điểm hóa của sinh viên';
        flag = false;
    } else if(chemistryScores > 10) {
        chemistryScores = '';
        document.getElementById('chemistryError').innerHTML = 'Vui lòng nhập số điểm <= 10';
        flag = false;
    } else {
        document.getElementById('chemistryError').innerHTML = '';
    }
    return flag;
}

function saveStudentLS(student) {
    let mediumScore = (Number(student.mathScores) + Number(student.physicsScores) + Number(student.chemistryScores)) / 3;
    let mediumScoreTwo = Math.round(mediumScore * 100) / 100;
    let ability = '';
    if(mediumScoreTwo >= 8) {
        ability = 'Giỏi';
    } else if(mediumScoreTwo >= 6.5) {
        ability = 'Khá';
    } else if(mediumScoreTwo >= 5) {
        ability = 'Trung bình';
    } else {
        ability = 'Yếu';
    }

    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    let fullname = student.fullname;
    let fullnameStr = fullname.split(' ');
    let name = fullnameStr[fullnameStr.length - 1];

    students.push({
        fullname: student.fullname,
        name: name,
        gender: student.gender,
        age: student.age,
        mathScores: student.mathScores,
        physicsScores: student.physicsScores,
        chemistryScores: student.chemistryScores,
        mediumScoreTwo: mediumScoreTwo,
        ability: ability
    });
    
    localStorage.setItem('students', JSON.stringify(students));

    this.renderListStudent();
}

function renderListStudent() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    
    let tableContent = `<tr style="text-align: center; background-color: rgb(170, 217, 227); font: caption;">
        <td> ID </td>
        <td> Họ và tên </td>
        <td style="display:none;"> Name </td>
        <td> Giới tính </td>
        <td> Tuổi </td>
        <td> Điểm toán </td>
        <td> Điểm lý </td>
        <td> Điểm hóa </td>
        <td> Điểm TB </td>
        <td> Học lực </td>
        <td> Hành động </td>
    </tr>`;

    students.forEach((student, index) => {
        let id = index;
        let fullname = student.fullname;
        let fullnameStr = fullname.split(' ');
        let name = fullnameStr[fullnameStr.length - 1];

        let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
        index++;

        tableContent += `<tr style="background-color: rgb(212, 228, 228);">
            <td style="text-align: center; ">${index}</td>
            <td>${student.fullname}</td>
            <td style="display:none;">${name}</td>
            <td>${genderLabel}</td>
            <td>${student.age}</td>
            <td>${student.mathScores}</td>
            <td>${student.physicsScores}</td>
            <td>${student.chemistryScores}</td>
            <td>${student.mediumScoreTwo}</td>
            <td>${student.ability}</td>
            <td style="text-align: center;">
                <a href='#' style="color: #853838;" onclick="deleteStudent(${id})">Delete</a> |
                <a href='#' style="color: #853838;" onclick="editStudent(${id})">Edit</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-student').innerHTML = tableContent;
}

function deleteStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    //Xoa 1 phan tu trong mang
    students.splice(id, 1);
    
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudent();
}

function editStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    
    document.getElementById('fullname').value = students[id].fullname;
    
    if(students[id].gender == 1) {
        document.getElementById('male').checked = true;
    } else {
        document.getElementById('female').checked = true;
    }
    document.getElementById('age').value = students[id].age;
    document.getElementById('math_score').value = students[id].mathScores;
    document.getElementById('physics_score').value = students[id].physicsScores;
    document.getElementById('chemistry_score').value = students[id].chemistryScores;
    document.getElementById('id').value = id;

    document.getElementById('save').style.display = 'none';
    document.getElementById('save').style.color = 'red';
    document.getElementById('update').style.display = 'block';

    localStorage.setItem('students', JSON.stringify(students));
}

function updateStudent() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    
    let student = getStudentForm();
    let checkSV = checkStudent(student);

    let id = document.getElementById('id').value;
    let fullname = student.fullname;
    let fullnameStr = fullname.split(' ');
    let name = fullnameStr[fullnameStr.length - 1];
    let gender = '';
    if(document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if(document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    // cập nhật thông tin 
    var math = document.getElementById('math_score').value;
    var physics= document.getElementById('physics_score').value;
    var chemistry= document.getElementById('chemistry_score').value;

    let mediumScoreTwo = 0;
    let ability = '';
    let mediumScore = (Number(math) + Number(physics) + Number(chemistry)) / 3;
    mediumScoreTwo = Math.round(mediumScore * 100) / 100;
    if(mediumScoreTwo >= 8) {
        ability = 'Giỏi';
    } else if(mediumScoreTwo >= 6.5) {
        ability = 'Khá';
    } else if(mediumScoreTwo >= 5) {
        ability = 'Trung bình';
    } else {
        ability = 'Yếu';
    }

    students[id] = {
        fullname: document.getElementById('fullname').value,
        name: name,
        gender: gender,
        age: document.getElementById('age').value,
        mathScores: document.getElementById('math_score').value,
        physicsScores: document.getElementById('physics_score').value,
        chemistryScores: document.getElementById('chemistry_score').value,
        mediumScoreTwo: mediumScoreTwo,
        ability: ability
    };

    if(checkSV == true){
        localStorage.setItem('students', JSON.stringify(students));
        renderListStudent();
        resetInput();
        document.getElementById('save').style.display = 'block';
        document.getElementById('update').style.display = 'none';
    }
}

function renderListStudentSearch(arrStudents) {
    let tableContent = `<tr style="text-align: center; background-color: rgb(170, 217, 227); font: caption;">
        <th> ID </th>
        <th> Họ và tên </th>
        <th style="display:none;"> Name </th>
        <th> Giới tính </th>
        <th> Tuổi </th>
        <th> Điểm toán </th>
        <th> Điểm lý </th>
        <th> Điểm hóa </th>
        <th> Điểm TB </th>
        <th> Học lực </th>
        <th> Hành động </th>
    </tr>`;

    arrStudents.forEach((student, index) => {
        let id = index;
        let fullname = student.fullname;
        let fullnameStr = fullname.split(' ');
        let name = fullnameStr[fullnameStr.length - 1];

        let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
        index++;

        tableContent += `<tr style="background-color: rgb(212, 228, 228);">
            <td style="text-align: center; ">${index}</td>
            <td>${student.fullname}</td>
            <td style="display:none;">${name}</td>
            <td>${genderLabel}</td>
            <td>${student.age}</td>
            <td>${student.mathScores}</td>
            <td>${student.physicsScores}</td>
            <td>${student.chemistryScores}</td>
            <td>${student.mediumScoreTwo}</td>
            <td>${student.ability}</td>
            <td style="text-align: center;">
                <a href='#' style="color: #853838;" onclick="deleteStudent(${id})">Delete</a> |
                <a href='#' style="color: #853838;" onclick="editStudent(${id})">Edit</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-student').innerHTML = tableContent;
}

//Tìm kiếm
function searchUser() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    let searchTxt = document.getElementById("searchTxt").value;
    let studentsSearch = [];
    for(let i = 0; i < students.length; i ++) {
        if(students[i].fullname.toUpperCase().includes(searchTxt.toUpperCase()) == true) {
            studentsSearch.push(students[i]);
        }
    }
    renderListStudentSearch(studentsSearch);
}

//tạo 1 cột chỉ chứa tên
// Sắp xếp theo tên
function ascending() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    
    let valueSelect = document.getElementById('sort').value;
    let ascendingArr = students.sort((a, b) => {
        if(valueSelect === 'az') {
            return a.name.localeCompare(b.name);
        } else if(valueSelect === 'za') {
            return b.name.localeCompare(a.name);
        } else {
            return a.id - b.id;
        }
    });
    renderListStudentSearch(ascendingArr);
}