
console.log("------------------------------LAMBDA CLASSES-------------------------------------");

// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
  constructor(personAtts) {
    this.name = personAtts.name;
    this.age = personAtts.age;
    this.location = personAtts.location;
  }
  greet() {
    return `Hello! My name is ${this.name}, I'm from ${this.location}.`;
  }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(instructAttr) {
    super(instructAttr);
    this.favLanguage = instructAttr.favLanguage;
    this.specialty = instructAttr.specialty;
    this.catchPhrase = instructAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we're learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}.`;
  }
}

const reggie = new Instructor({
  name: "Reginald Swanson",
  age: 37,
  location: "Portland, Oregon",
  favLanguage: "C#",
  specialty: "Satements and Expressions",
  catchPhrase: "It's time to d-d-d-duel!"
});

const amy = new Instructor({
  name: "Amy Smithers",
  age: 30,
  location: "Cleveland, Ohio",
  favLanguage: "JavaScript",
  specialty: "React",
  catchPhrase: "Make it so."
});


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBg = studentAttr.previousBg;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listsSubjects() {
    //foreach method fix individually display.
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a Pull Request for ${subject}.`
  }
  sprintChalenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

const karen = new Student ({
  name: "Karen Maren",
  age: 24,
  location: "Indianapolis, Indiana",
  previousBg: "Finance",
  className: "UX12",
  favSubjects: [
    "Typography", 
    "Color Theory",
  ]
});

const bryan = new Student ({
  name: "Bryan Angelo",
  age: 40,
  location: "Louisville, Kentucky",
  previousBg: "Customer Service",
  className: "WEB12",
  favSubjects: [
    "CSS",
    "HTML",
    "JavaScript"
  ]
});

const lydia = new Student({
  name: "Lydia Marks",
  age: 21,
  location: "Macon, Georgia",
  previousBg: "Graphic Design",
  className: "WEBPT10",
  favSubjects: [
    "React",
    "Data Structures"
  ]
});

// #### Team Lead

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class TeamLead extends Instructor {
  constructor(tlAttr) {
    super(tlAttr);
    this.gradClassName = tlAttr.gradClassName;
    this.favInstructor = tlAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, "@channel standy times!!"`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const gary = new TeamLead({
  name: "Gary Potter",
  age: 28,
  location: "Oakland, California",
  favLanguage: "Ruby",
  specialty: "Rails",
  catchPhrase: "Dyn-o-mite!",
  gradClassName: "WEB3",
  favInstructor: amy
});

const auggy = new TeamLead ({
  name: "Augustine Glass",
  age: 45,
  location: "Seattle, Washington",
  favLanguage: "C++",
  specialty: "Robotics",
  catchPhrase: "What you talkin' 'bout Willis?",
  gradClassName: "DS1",
  favInstructor: reggie
});

const beth = new TeamLead ({
  name: "Elizabeth Randolph",
  age: 32,
  location: "Phoenix, Arizona",
  favLanguage: "Swift",
  specialty: "Frameworks",
  catchPhrase: "Did I do thaaaaat?",
  gradClassName: "iOS4",
  favInstructor: amy
});

console.log(reggie.greet());
console.log(amy.favLanguage);
console.log(karen.PRAssignment("Color Theory"));
console.log(bryan.listsSubjects());
console.log(lydia.className);
console.log(gary.debugsCode(bryan, "Advanced CSS"));
console.log(auggy.standUp("web13_augustine"));
console.log(beth.catchPhrase);

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
