const data = require('./data.js');
const question_name = 'balances';
const answer = require('./answer.js');
/* data_checkbox simulates a checkbox answer */ 
let data_checkbox = JSON.parse(JSON.stringify(data));
data_checkbox[question_name].questions.fullquestion.answertype = 'checkbox';
data_checkbox[question_name].questions.fullquestion.answer[0].correct = true;

test('TC1 if number is greater than num answers response il always false', () => {
  expect(answer.is_correct(data, question_name, [100000, 100001, 100002])).toBe(false);
});

test('TC2 answer is wrong', () => {
  expect(answer.is_correct(data, question_name, [0])).toBe(false);
});


test('TC3 number is correct', () => {
  expect(answer.is_correct(data, question_name, [3])).toBe(true);
});

test('TC4 number as string', () => {
  expect(answer.is_correct(data, question_name, ['3'])).toBe(false);
});

test('TC5 number as null', () => {
  expect(answer.is_correct(data, question_name, [])).toBe(false);
});

test('TC6 checkbox with correct answers', () => {
  expect(answer.is_correct(data_checkbox, question_name, [0, 3])).toBe(true);
});

test('TC6 checkbox with incorrect answers', () => {
  expect(answer.is_correct(data_checkbox, question_name, [0, 1])).toBe(false);
});