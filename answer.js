/**
 * Given and oject data a question name and user_
 * 
 * @param {object} data 
 * @param {string} question_name 
 * @param {array} user_answers 
 */
function is_correct(data, question_name, user_answers) {
  /* set some variables and set the default result to false */
  result = false;
  let data_correct_answers = [];
  let user_correct_answers = [];    
  let max_index_to_check = 0;
  
  /* user_answers must be an array and contains less element than answer in data.question_name */
  if (Array.isArray(user_answers) && user_answers.length < data[question_name].questions.fullquestion.answer.length) {
  
    /* update the max_index_to_check if the answertype is checkbox */
    if (data[question_name].questions.fullquestion.answertype == 'checkbox') {
      max_index_to_check = user_answers.length - 1;
    }
    
    /* calculate number of correct answers */
    data[question_name].questions.fullquestion.answer.forEach((answer, index) => {
      if (answer.correct == true) {
        data_correct_answers.push(index);
      }
    });
    
    /* parse the user_answers */
    let index = 0;
    while (index <= max_index_to_check) {
      /* check that the user_answers[index] exists and is a number */ 
      if (user_answers[index] in data[question_name].questions.fullquestion.answer && 'number' == typeof user_answers[index]) {
        if (data[question_name].questions.fullquestion.answer[user_answers[index]].correct) {
          user_correct_answers.push(user_answers[index]);
        }
      }
      index++;
    }
    /* set the result based on num_correct_answer and num_user_correct_answer */
    result = data_correct_answers.length > 0 && JSON.stringify(user_correct_answers.sort()) === JSON.stringify(data_correct_answers.sort());
  }
  return result;
}



module.exports = {
  is_correct: is_correct,
};
