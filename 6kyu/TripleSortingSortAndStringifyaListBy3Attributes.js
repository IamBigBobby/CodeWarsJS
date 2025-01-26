// Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

// Given a list of students, sort them by (from most important to least important):

// GPA (descending)
// First letter of last name (ascending)
// Age (ascending)
// And the class Student:

// class Student {
//   constructor(age, gpa, fullName) {
//     this.age = age;
//     this.gpa = gpa;
//     this.fullName = fullName;
//   };
// };
// Return the sorted result as full names string, comma separated.

// For Example, given the list (name, age, gpa):

// David Goodman, 23, 88
// Mark Rose, 25, 82
// Jane Doe, 22, 90
// Jane Dane, 25, 90
// sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"

function sort(students) {
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students.length - 1 - i; j++) {
            if(students[j + 1].age < students[j].age){
                [students[j + 1], students[j]] = [students[j], students[j + 1]];
            }
        }
    }

    students.sort((a, b) => a.fullName[0] - b.fullName[0]);

    return students.reduce((acc, element, index) => {
        return acc + element.fullName + (index === students.length - 1 ? '' : ',');
    }, '');
};

class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
};

console.log(sort([new Student(23, 88, "David Goodman"), 
    new Student(25, 82, "Mark Rose"), 
    new Student(22, 90, "Jane Doe"),
    new Student(25, 90, "Jane Dane")]));