const data = require('./data.js');
const question_name = 'balances';
const answer = require('./answer.js');
/* data_checkbox simulates a checkbox answer */ 
let data_checkbox = JSON.parse(JSON.stringify(data));
data_checkbox[question_name].questions.fullquestion.answertype = 'checkbox';
data_checkbox[question_name].questions.fullquestion.answer[0].correct = true;

test('TC1 if number of user answers is greater than num answers in the response', () => {
  expect(answer.is_correct(data, question_name, [1, 1, 1, 1, 1, 1])).toBe(false);
});

test('TC2 answer is wrong', () => {
  expect(answer.is_correct(data, question_name, [0])).toBe(false);
});

test('TC3 number is correct', () => {
  expect(answer.is_correct(data, question_name, [3])).toBe(true);
});

test('TC4 someone is cheating trying to send more than 1 answer only the index 0 will be considered', () => {
  expect(answer.is_correct(data, question_name, [2, 3])).toBe(false);
});

test('TC5 number as string', () => {
  expect(answer.is_correct(data, question_name, ['3'])).toBe(false);
});

test('TC6 number as null', () => {
  expect(answer.is_correct(data, question_name, [])).toBe(false);
});

test('TC7 checkbox with correct answers', () => {
  expect(answer.is_correct(data_checkbox, question_name, [0, 3])).toBe(true);
});

test('TC8 checkbox with correct answers with different order', () => {
  expect(answer.is_correct(data_checkbox, question_name, [3, 0])).toBe(true);
});

test('TC9 checkbox with incorrect answers', () => {
  expect(answer.is_correct(data_checkbox, question_name, [0, 1])).toBe(false);
});

test('TC10 user_answers parameter not array', () => {
  expect(answer.is_correct(data_checkbox, question_name, 3)).toBe(false);
});

test('TC11 checkbox with correct answer duplicated', () => {
  expect(answer.is_correct(data_checkbox, question_name, [0, 0])).toBe(false);
});