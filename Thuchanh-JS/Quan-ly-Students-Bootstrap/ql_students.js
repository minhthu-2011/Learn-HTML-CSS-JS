
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
    console.log(mathScores);
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
    let mathScores = student.math_score;
    let physicsScores = student.physics_score;
    let chemistryScores = student.chemistry_score;
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

function resetInput() {
    document.getElementById('fullname').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('age').value = '';
    document.getElementById('math_score').value = '';
    document.getElementById('physics_score').value = '';
    document.getElementById('chemistry_core').value = '';
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

    let tableContent = `<thead>
        <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ và tên</th>
            <td style="display:none;"> Name </td>
            <th scope="col">Giới tính</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Điểm toán</th>
            <th scope="col">Diểm lý</th>
            <th scope="col">Điểm hóa</th>
            <th scope="col">Điểm TB</th>
            <th scope="col">Học lực</th>
            <th scope="col">Hành động</th>
        </tr>
    </thead>`;

    students.forEach((student, index) => {
        let id = index;
        let fullname = student.fullname;
        let fullnameStr = fullname.split(' ');
        let name = fullnameStr[fullnameStr.length - 1];

        let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
        index++;

        tableContent += `<tr style="background-color: #dfd8d8;">
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