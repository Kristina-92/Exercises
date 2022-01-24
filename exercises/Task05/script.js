
function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
    this.getAge = function() {
        let studentAge =  new Date().getFullYear() - this.birthYear;
        return studentAge;
    }
    this.getInfo = function() {
    let message = `This is student ${this.firstName} ${this.lastName} from the academy ${academy}` 
    return message;
    }

    this.getGradesAverage = function(){
    let sum = 0;
    let average = 0;
    for(i = 0; i < this.grades.length; i++){
        sum += this.grades[i];
        average = sum / this.grades.length;
    }
    return average;
    }
    
}

let student1 = new Student("Stanko", "Stankovski", 1999, "SEDC", [3, 5, 1, 2, 4]);
console.log(student1.getInfo());
console.log(student1.getGradesAverage());
console.log(student1.getAge());
