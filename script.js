// Objectives
//------------------
// Employ basic JavaScript syntax accurately.
// Implement control flow structures such as conditionals and loops effectively.
// Use arrays and objects to organize and manage data.
// Develop functions to create reusable code.
// Utilize loops and iteration to navigate through data collections.
// Implement error handling to manage potential code failures gracefully.

// what do we know
// --------------------
// Gather data, process it, and then output result based on whether assignments are due and if submissions are late.
// Output will be an array of objects

// Course information object
const courseInfo = {
  id: 308,
  name: "Intro to Javascript",
};
// console.log(courseInfo);

// Declaring assignmentGroup for assigment data detail.
const assignmentGroup = {
  id: 308.1,
  name: "Variable Declarations",
  course_id: 308,
  group_weight: 40,
  assignments: [
    //Using arrays and objects to organize and manage data.
    {
      id: 1,
      name: "The var Statement",
      due_at: "2023-09-20",
      points_possible: 100,
    },
    {
      id: 2,
      name: "The let Statement",
      due_at: "2023-09-30",
      points_possible: 150,
    },
    {
      id: 3,
      name: "The const Statement",
      due_at: "2023-10-10",
      points_possible: 200,
    },
  ],
};
// console.log(assignmentGroup);


// Learner submissions array
const LearnerSubmissions = [
  {
    learner_id: 3001,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-09-19",
      score: 95,
    },
  },
  {
    learner_id: 3001,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-09-29", // Late submission
      score: 120,
    },
  },
  {
    learner_id: 3001,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-10-09",
      score: 180,
    },
  },
  {
    learner_id: 3002,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-09-21",
      score: 88,
    },
  },
  {
    learner_id: 3002,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-09-30", // On time
      score: 150,
    },
  },
  {
    learner_id: 3002,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-10-11", // Late submission
      score: 190,
    },
  },
];