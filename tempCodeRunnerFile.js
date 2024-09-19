  for (const submission of submissions) {
  const {
  learner_id,
  assignment_id,
  submission: { submitted_at, score },
  } = submission;
  const assignment = assignmentMap.get(assignment_id);
console.log('submission');