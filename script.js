//SBA 308: JavaScript Fundamentals

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
  name: "Javascript",
};

// Declaring assignmentGroup for assignment data detail.
const assignmentGroup = {
  id: 308.1,
  name: "Intro to Javascript",
  course_id: 308,
  group_weight: 40,
  assignments: [
    // Using arrays and objects to organize and manage data.
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

// Learner submissions array
const learnerSubmissions = [
  {
    learnerId: 3001,
    learnerName: "Alice",
    assignmentId: 1,
    submission: {
      submittedAt: "2023-09-19",
      score: 95,
    },
  },
  {
    learnerId: 3001,
    learnerName: "Alice",
    assignmentId: 2,
    submission: {
      submittedAt: "2023-09-29", // Late submission
      score: 120,
    },
  },
  {
    learnerId: 3001,
    learnerName: "Alice",
    assignmentId: 3,
    submission: {
      submittedAt: "2023-10-09",
      score: 180,
    },
  },
  {
    learnerId: 3002,
    learnerName: "Bob",
    assignmentId: 1,
    submission: {
      submittedAt: "2023-09-21",
      score: 88,
    },
  },
  {
    learnerId: 3002,
    learnerName: "Bob",
    assignmentId: 2,
    submission: {
      submittedAt: "2023-09-30", // On time
      score: 150,
    },
  },
  {
    learnerId: 3002,
    learnerName: "Bob",
    assignmentId: 3,
    submission: {
      submittedAt: "2023-10-11", // Late submission
      score: 190,
    },
  },
];

// function to gather and process learner data
function getLearnerData(course, assignmentGroup, submissions) {
  try {
    // Validate course ID in assignment group
    if (assignmentGroup.course_id !== course.id) {
      throw new Error("Invalid course_id in assignment group.");
    }

    // Initialized empty object (results) to hold each learner's processed ID, scores, and averages values.
    const results = {};
    const currentDate = new Date();
    const assignmentMap = new Map(
      assignmentGroup.assignments.map((a) => [a.id, a])
    );

    // Process each submission
    for (const submission of submissions) {
      const {
        learnerId,
        learnerName,
        assignmentId,
        submission: { submittedAt, score },
      } = submission;
      const assignment = assignmentMap.get(assignmentId);

      // Skip if assignment not found or not yet due
      if (!assignment || new Date(assignment.due_at) > currentDate) continue;

      const dueDate = new Date(assignment.due_at);
      const pointsPossible = assignment.points_possible;

      // Check for valid points_possible
      if (typeof pointsPossible !== "number" || pointsPossible <= 0) {
        throw new Error(
          `Invalid points_possible for assignment ${assignmentId}.`
        );
      }

      // Calculate assignment score percentage
      let scorePercentage = score / pointsPossible;

      // Deduct 10% for late submissions
      if (new Date(submittedAt) > dueDate) {
        scorePercentage *= 0.9;
      }

      // Initialize learner record if not already present
      if (!results[learnerId]) {
        results[learnerId] = {
          id: learnerId,
          name: learnerName,
          avg: 0,
          scores: {},
        };
      }

      // Store the assignment score percentage
      results[learnerId].scores[assignmentId] = scorePercentage;

      // Compute weighted average
      results[learnerId].avg +=
        scorePercentage * pointsPossible * (assignmentGroup.group_weight / 100);
    }
    // Calculate total weight for the average
    const totalWeight = assignmentGroup.assignments.reduce((total, a) => {
      return total + a.points_possible * (assignmentGroup.group_weight / 100);
    }, 0);

    // Finalize results and format output
    const finalResults = Object.values(results).map((result) => {
      const { id, name, scores } = result;
      result.avg = totalWeight > 0 ? (result.avg / totalWeight) * 100 : 0;
      return { id, name, avg: parseFloat(result.avg.toFixed(3)), ...scores };
    });

    // Create person array
    const personArray = finalResults.map(({ id, name, avg }) => ({
      learnerId: id,
      learnerName: name,
      assignmentGroup: assignmentGroup.name,
      averageScore: avg,
    }));

    return personArray;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

//function run with the provided data
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);

// Log the result
console.log(result);
