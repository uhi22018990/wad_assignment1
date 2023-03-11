const data = require('./data.js');
const question_name = 'balances';
const question_buttons = ['buttonRetry', 'buttonCheck', 'toastCorrect', 'toastIncorrect', 'buttonContinue'];
const answer_properties = ['textpadding', 'correct', 'top', 'left', 'width', 'text', 'align', 'height'];


test('TC1 there is a property with same name of question', () => {
  expect(data).toHaveProperty(question_name);
});

test('check if data.question_name has exact properties', () => {
  expect(data[question_name]).toHaveProperty('hint');
  expect(data[question_name]).toHaveProperty('questions');
  expect(data[question_name]).toHaveProperty('idcourse');
  expect(data[question_name]).toHaveProperty('orderofquestions');
});

test('TC3 check data.question_name properties type', () => {
  expect(typeof data[question_name].hint).toBe('object');
  expect(typeof data[question_name].questions).toBe('object');
  expect(typeof data[question_name].idcourse).toBe('number');
  expect(typeof data[question_name].orderofquestions).toBe('number');
});

test('TC4 check if data.question_name.questions has exact properties', () => {
  expect(data[question_name].questions).toHaveProperty('title');
  expect(data[question_name].questions).toHaveProperty('fullquestion');
});

test('TC5 check data.question_name.questions properties type', () => {
  expect(typeof data[question_name].questions.title).toBe('string');
  expect(typeof data[question_name].questions.fullquestion).toBe('object');
});

test('TC6 check if data.question_name.questions.fullquestion has exact properties', () => {
  expect(data[question_name].questions.fullquestion).toHaveProperty('question');
  expect(data[question_name].questions.fullquestion).toHaveProperty('answer');
  expect(data[question_name].questions.fullquestion).toHaveProperty('answertype');
  expect(data[question_name].questions.fullquestion).toHaveProperty('buttonCheck');
  expect(data[question_name].questions.fullquestion).toHaveProperty('toastCorrect');
  expect(data[question_name].questions.fullquestion).toHaveProperty('toastIncorrect');
  expect(data[question_name].questions.fullquestion).toHaveProperty('buttonContinue');
});

test('TC7 check data.question_name.questions.fullquestion properties type', () => {
  expect(typeof data[question_name].questions.fullquestion.question).toBe('string');
  expect(typeof data[question_name].questions.fullquestion.answer).toBe('object');
  expect(typeof data[question_name].questions.fullquestion.answertype).toBe('string');
  expect(typeof data[question_name].questions.fullquestion.buttonCheck).toBe('object');
  expect(typeof data[question_name].questions.fullquestion.toastCorrect).toBe('object');
  expect(typeof data[question_name].questions.fullquestion.toastIncorrect).toBe('object');
  expect(typeof data[question_name].questions.fullquestion.buttonRetry).toBe('object');
  expect(typeof data[question_name].questions.fullquestion.buttonContinue).toBe('object');
});


test('TC8 check if data.question_name.questions.fullquestion buttons has exact properties', () => {
  question_buttons.forEach(button => {
    expect(data[question_name].questions.fullquestion[button]).toHaveProperty('top');
    expect(data[question_name].questions.fullquestion[button]).toHaveProperty('left');
  });
});

test('TC9 check data.question_name.questions.fullquestion buttons properties type', () => {
  question_buttons.forEach(button => {
    expect(typeof data[question_name].questions.fullquestion[button].top).toBe('number');
    expect(typeof data[question_name].questions.fullquestion[button].left).toBe('number');
  });
});

test('TC10 check if data.question_name.questions.fullquestion.answer has at least 2 answers', () => {
  expect(data[question_name].questions.fullquestion.answer.length).toBeGreaterThanOrEqual(2);
});

test('TC11 check if all data.question_name.questions.fullquestion.answer have exact properties', () => {
  data[question_name].questions.fullquestion.answer.forEach(answer => {
    answer_properties.forEach(property => {
      expect(answer).toHaveProperty(property);
    });
  });
});


test('TC12 check that there is only 1 correct answer if answertype is radio or more if checkbox', () => {
  correct = 0;
  data[question_name].questions.fullquestion.answer.forEach(answer => {
    if (answer.correct == true) {
      correct++;
    }
  });
  if (data[question_name].questions.fullquestion.answertype == 'radio') {
    expect(correct).toBe(1);
  } else {
    expect(correct).toBeGreaterThanOrEqual(1);
  }
});


test('TC13 an answer MUST have a not empty text', () => {
  data[question_name].questions.fullquestion.answer.forEach(answer => {
    expect(answer.text.length).toBeGreaterThanOrEqual(1);
  });
});
