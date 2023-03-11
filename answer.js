/**
 * Given and oject data and and question number
 * 
 * @param {object} data 
 * @param {string} question_name 
 * @param {array} numbers 
 */
function is_correct(data, question_name, numbers) {
  result = false;
  let num_correct_answer = 0;
  let num_user_correct_answer = 0;    
  let max_index_to_check = 0;


  if (Array.isArray(numbers) && numbers.length < data[question_name].questions.fullquestion.answer.length) {
    
    /* calculate number of correct answers */
    data[question_name].questions.fullquestion.answer.forEach(answer => {
      if (answer.correct == true) {
        num_correct_answer++;
      }

    });
    
    /* parse the given numbers */
    if (data[question_name].questions.fullquestion.answertype == 'checkbox') {
      max_index_to_check = numbers.length - 1;
    }
  
    let index = 0;
    while (index <= max_index_to_check) {
      if (numbers[index] in data[question_name].questions.fullquestion.answer && 'number' == typeof numbers[index]) {
        if (data[question_name].questions.fullquestion.answer[numbers[index]].correct) {
          num_user_correct_answer++;
        }
      }
      index++;
    }
    result = num_correct_answer > 0 && num_user_correct_answer == num_correct_answer;
    
  }
  return result;
}



module.exports = {
  is_correct: is_correct,
};
