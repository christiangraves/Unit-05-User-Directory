const state = {


    employeeList: [
        {
            name: 'Jan',
            officeNum: 1,
            phoneNum: '222-222-2222',
            department: 'Database'
        },
        {
            name: 'Juan',
            officeNum: 304,
            phoneNum: '489-789-8789',
            department: 'Sales'
        },
        {
            name: 'Margie',
            officeNum: 789,
            phoneNum: '789-789-7897',
            department: 'IT'
        },
        {
            name: 'Sara',
            officeNum: 32,
            phoneNum: '222-789-4654',
            department: 'Facility Tech'
        },
        {
            name: 'Tyrell',
            officeNum: 3,
            phoneNum: '566-621-0452',
            department: 'Human Resources'
        },
        {
            name: 'Tasha',
            officeNum: 213,
            phoneNum: '789-766-5675',
            department: 'Payroll'
        },

        {
            name: 'Ty',
            officeNum: 211,
            phoneNum: '789-766-7865',
            department: 'IT'
        },
        {
            name: 'Sarah',
            officeNum: 345,
            phoneNum: '222-789-5231',
            department: 'Human Resources'
        }
    ],

    userCommand: ''
};

//let userCommand = '';


const theCommands = function (event) {
    event.preventDefault();
    let theEmployee = state.employeeList;
    let employeeString = '';
    switch (state.userCommand) {

        case 'print':
            theEmployee.forEach(employee => {
                employeeString += `<div class="theOutput"><p> Name: ${employee.name} </p>`;
                employeeString += `<p> Office Number: ${employee.officeNum} </p>`;
                employeeString += `<p> Phone Number: ${employee.phoneNum} </p>`;
                employeeString += `<p> Department: ${employee.department} </p></div>`;
            });

            render(employeeString);
            break;

        case 'verify':
            let test = theEmployee.some(verifiedEmployee => verifiedEmployee.name.toLowerCase() === $('#verifyInput').val().toLowerCase());
            if (test === true) {
                employeeString = `<div class = "theOutput"><p>Employee Found</div>`;
            }
            else if (test !== true) {
                employeeString = `<div class = "theOutput"><p>Employee Not Found</div>`;
            }

            render(employeeString);
            break;

        case 'lookup':

            let man = theEmployee.filter(foundEmployee => foundEmployee.name.toLocaleLowerCase() === $('#lookupInput').val().toLowerCase());
            if (man.length !== 0) {
                man.forEach(employee => {
                    employeeString += `<div class="theOutput"><p> Name: ${employee.name} </p>`;
                    employeeString += `<p> Office Number: ${employee.officeNum} </p>`;
                    employeeString += `<p> Phone Number: ${employee.phoneNum} </p>`;
                    employeeString += `<p> Department: ${employee.department} </p></div>`;
                });
                render(employeeString);
            }
            employeeString += `<div class = "theOutput"><p>Employee Not Found</div>`;

            render(employeeString);
            break;

        case 'contains':

            const enteredString = $('#containsInput').val().toLowerCase();
            let foundEmployees = theEmployee.filter(employee => employee.name.toLowerCase().includes(enteredString));
            if (foundEmployees !== 0) {
                foundEmployees.forEach(employee => {
                    employeeString += `<div class="theOutput"><p> Name: ${employee.name} </p>`;
                    employeeString += `<p> Office Number: ${employee.officeNum} </p>`;
                    employeeString += `<p> Phone Number: ${employee.phoneNum} </p>`;
                    employeeString += `<p> Department: ${employee.department} </p></div>`;
                })
                render(employeeString);
            }
            render(employeeString);
            break;

        case 'update':

            const empOff = $('#offUpdate').val();
            const empPhone = $('#phoneUpdate').val().toLowerCase();
            const empDept = $('#deptUpdate').val();
            //console.log(typeof empDept1);
            //const empDeptCap = empDept1[0].toUpperCase() + empDept1.toLowerCase().substring(1);
            let man1 = theEmployee.findIndex(foundEmployee => foundEmployee.name.toLocaleLowerCase() === $('#nameUpdate').val().toLowerCase());
            const offFloat = parseFloat(empOff);
            if (man1 !== -1) {
                theEmployee[man1].officeNum = offFloat;
                theEmployee[man1].phoneNum = empPhone;
                theEmployee[man1].department = empDept;
                console.log(theEmployee[man1]);
                render(
                    `<div class="theOutput"><p> Name: ${theEmployee[man1].name} </p>` +
                    `<p> Office Number: ${theEmployee[man1].officeNum} </p>` +
                    `<p> Phone Number: ${theEmployee[man1].phoneNum} </p>` +
                    `<p> Department: ${theEmployee[man1].department} </p></div>`);
            }
            else {
                employeeString += `<div class = "theOutput"><p>Employee Not Found</div>`;
                render(employeeString);
            }
            break;

        case 'add':

            const empNameAdd = $('#nameAdd').val()
            const empOffAdd = $('#offAdd').val();
            const empPhoneAdd = $('#phoneAdd').val().toLowerCase();
            const empDeptAdd = $('#deptAdd').val();
            const offFloatAdd = parseFloat(empOffAdd);
            const empNameCap = empNameAdd[0].toUpperCase() + empNameAdd.toLowerCase().substring(1);
            const empDeptCap1 = empDeptAdd[0].toUpperCase() + empDeptAdd.toLowerCase().substring(1);

            const newEmployee = { name: empNameCap, officeNum: offFloatAdd, phoneNum: empPhoneAdd, department: empDeptCap1 };

            theEmployee.push(newEmployee);

            theEmployee.forEach(employee => {
                employeeString += `<div class="theOutput"><p> Name: ${employee.name} </p>`;
                employeeString += `<p> Office Number: ${employee.officeNum} </p>`;
                employeeString += `<p> Phone Number: ${employee.phoneNum} </p>`;
                employeeString += `<p> Department: ${employee.department} </p></div>`;
            });

            render(employeeString);
            break;

        case 'delete':
            
            let man2 = theEmployee.findIndex(foundEmployee => foundEmployee.name.toLocaleLowerCase() === $('#deleteName').val().toLowerCase());
                if(man2 !== -1){    
                    theEmployee.splice(man2, 1);
                    theEmployee.forEach(employee => {
                        employeeString += `<div class="theOutput"><p> Name: ${employee.name} </p>`;
                        employeeString += `<p> Office Number: ${employee.officeNum} </p>`;
                        employeeString += `<p> Phone Number: ${employee.phoneNum} </p>`;
                        employeeString += `<p> Department: ${employee.department} </p></div>`;
                    });
                    render(employeeString);
                }

        case 'department':
                
            let foundDept = theEmployee.filter(employee => employee.department.toLowerCase() === $('#deptInput').val().toLowerCase() );
            console.log(foundDept);
            if (foundDept.length !== 0) {
                foundDept.forEach(employee => {
                    employeeString += `<div class="theOutput"><p> Name: ${employee.name} </p>`;
                    employeeString += `<p> Office Number: ${employee.officeNum} </p>`;
                    employeeString += `<p> Phone Number: ${employee.phoneNum} </p>`;
                    employeeString += `<p> Department: ${employee.department} </p></div>`;
                })
                render(employeeString);
                console.log(typeof foundDept);
            }
            else{

            employeeString += `<div class = "theOutput"><p>Department Not Found</div>`;
            render(employeeString);
            }
            break;
    }
}


const render = function (employeeString) {
    $('#users').html(employeeString);

}

const welcomeHome = function (event) {
    event.preventDefault();
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verifyInput').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#verify').removeClass('show')
    $('#update').removeClass('show');
    $('#add').removeClass('show');
    $('#delete').removeClass('show');
    $('#department').removeClass('show');
    $('#users').removeClass('show');
    $('#theTitle').addClass('show');
}

const print = function (event) {
    state.userCommand = 'print';
    theCommands(event);
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verifyInput').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#verify').removeClass('show');
}

const verify = function (event) {
    state.userCommand = 'verify';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verifyInput').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#verify').addClass('show')
}

const lookup = function (event) {
    state.userCommand = 'lookup';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verify').removeClass('show');
    $('#contains').removeClass('show');
    $('#update').removeClass('show');
    $('#add').removeClass('show');
    $('#delete').removeClass('show');
    $('#department').removeClass('show')
    $('#lookup').addClass('show');
}

const contains = function (event) {
    state.userCommand = 'contains';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verify').removeClass('show');
    $('#lookup').removeClass('show');
    $('#update').removeClass('show');
    $('#add').removeClass('show');
    $('#delete').removeClass('show');
    $('#department').removeClass('show')
    $('#contains').addClass('show');
}

const update = function (event) {
    state.userCommand = 'update';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verify').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#add').removeClass('show');
    $('#delete').removeClass('show');
    $('#department').removeClass('show')
    $('#update').addClass('show');
}

const add = function (event) {
    state.userCommand = 'add';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verify').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#update').removeClass('show');
    $('#delete').removeClass('show');
    $('#department').removeClass('show')
    $('#add').addClass('show');
}

const remove = function (event) {
    state.userCommand = 'delete';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verify').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#update').removeClass('show');
    $('#add').removeClass('show');
    $('#department').removeClass('show')
    $('#delete').addClass('show');
}

const department = function (event) {
    state.userCommand = 'delete';
    $('#users').empty();
    $('#theTitle').removeClass('show');
    $('#homepage').removeClass('show');
    $('#verify').removeClass('show');
    $('#lookup').removeClass('show');
    $('#contains').removeClass('show');
    $('#update').removeClass('show');
    $('#add').removeClass('show');
    $('#delete').removeClass('show')
    $('#department').addClass('show');
}




$('#homepage').on('click', welcomeHome);
$('#linkOne').on('click', print);
$('#linkTwo').on('click', verify);
$('#linkThree').on('click', lookup);
$('#linkFour').on('click', contains);
$('#linkFive').on('click', update);
$('#linkSix').on('click', add);
$('#linkSeven').on('click', remove);
$('#linkEight').on('click', department);
$('.submit').on('click', theCommands);