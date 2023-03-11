# wad assignment 1

Author: 22018990
Date: 2023-03-11

## Introduction
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

Project is based on nodejs.
To run the test execute the command:

```
npm run test
```

The test prepared aims to check the correct format response for the website https://i-want-to-study-engineering.org.
The response has been provided by the tutor trough the link https://github.com/1122131uhi/WAD1122131/blob/main/balances.json .

However, while studying the provided response and the website I have found that those responses differ between them. 
It is very likely that the website has been updated while the module has been prepared.
The actual response for the "balances problem" is visible on `balances_actual.txt` in this repository.

Before start the test the website has been analysed in order to find variations between different questions. By looking some of the questions I have deducted the following points:

* a question MUST have a text
* a question MAY have an image. Below a question without image.
* a question MAY have answers expressed as images  ![](answer_as_image.png)

I have not check all the answers in the websites, however, by looking the response provided the `"answertype": "radio",` suggests that a question MAY have multiple responses.

All the tests have been enumerated with the prefix TC (Test Case) and a progressive number.
This is a personal practice which help the identification and the search on the source code in case of debug.


## Test strategy
The main strategy of the test is to check that an object has all the requested properties.
Moreover, the type of these properties has been checked.
Both strategies aim to verify the consistency of the response.   
By looking the response we can see that there is a property `balances`

```
{
  gravity_s: {
    indexes: { question: [Array], slide: [Array], numberOfSlides: 5388 },
    questions: { house: [Object] }
  },
  spec_mom_s: {
    indexes: { question: [], slide: [Array], numberOfSlides: 328 },
    questions: {}
  },
  mom_s: {
    indexes: { question: [Array], slide: [Array], numberOfSlides: 4020 },
    questions: { house: [Object] }
  },
  balances: {
    hint: { titleColumn: [Array], video: [Array], title: [Array] },
    questions: { title: 'Balances', fullquestion: [Object] },
    idcourse: 3,
    orderofquestions: 99
  },
  spec_gravity_s: {
    indexes: { question: [], slide: [Array], numberOfSlides: 1024 },
    questions: {}
  },
  spec_strat_balan_s: {
    indexes: { question: [Array], slide: [Array], numberOfSlides: 2154 },
    questions: { house: [Object] }
  },
  problem_s: {
    indexes: { question: [], slide: [], numberOfSlides: 1143 },
    questions: {}
  }
}
```
All the tests have been based on the `balances` property.
This because the other elements `gravity_s`, `spec_mom_s`, `spec_gravity_s`, `spec_strat_balan_s`, `problem_s` seems to be related to other parts of the websites.

The title of all the tests are descriptive on what the test is checking.
Some tests like `TC12 check that there is only 1 correct answer if answertype is radio or more if checkbox` are corollary of logic observations about the scope of the website.

