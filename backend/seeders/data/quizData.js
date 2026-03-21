const quizData = [
  {
    quizID: "m1",
    subjectID: "maths",
    name: "Addition",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "m2",
    subjectID: "maths",
    name: "Subtraction",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "m3",
    subjectID: "maths",
    name: "Multiplication",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "mc1",
    subjectID: "maths",
    name: "Speed Math",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "mc2",
    subjectID: "maths",
    name: "Mental Math",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "mc3",
    subjectID: "maths",
    name: "Word Problems",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "en1",
    subjectID: "english",
    name: "Grammar",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "en2",
    subjectID: "english",
    name: "Spelling",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "en3",
    subjectID: "english",
    name: "Punctuation",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "enc1",
    subjectID: "english",
    name: "Vocab Blast",
    type: "static",
    totalQuestions: 20,
    passage:
    {
      title: "The Swiss Family Robinson",
      author: "Johann David Wyss",
      synopsis: "",
      text: ""
    },
    questions: [
      {
        difficulty: 1,
        question_text: "At what time of year is the passage set?",
        options: ["winter", "spring", "rainy season", "mid-summer", "autumn"],
        correct_option: "spring"
      },
      {
        difficulty: 1,
        question_text: "The father compares himself and his family to prisoners set free. Why? (lines 2–3)",
        options: [
          "They had been held hostage by pirates.",
          "They had been trapped in their cave",
          "They had been trapped in their house due to stormy weather.",
          "They had been caught in heavy rain which had finally stopped.",
          "They had been unfairly accused of crimes but the accusations had been dropped."
        ],
        correct_option: "They had been trapped in their house due to stormy weather."
      },
      {
        difficulty: 2,
        question_text: "‘The winds at length were lulled’ (line 1) What is another way of saying ‘lulled’?",
        options: ["rhythmic", "weakened", "welcomed", "rocked", "calmed"],
        correct_option: "calmed"
      },
      {
        difficulty: 2,
        question_text: "Why might the author have decided to include water references in the first paragraph? (lines 1–5)",
        options: [
          "The heavy rain had recently stopped.",
          "Rain was still falling heavily.",
          "Water makes the setting seem more peaceful.",
          "The family hadn’t had a drink for a long time.",
          "The family have found themselves on an island surrounded by water."
        ],
        correct_option: "The heavy rain had recently stopped."
      },
      {
        difficulty: 1,
        question_text: "How many adjectives can you count in the sentence beginning “We refreshed our eyes…”? (lines 3–5)",
        options: ["1", "2", "3", "4", "5"],
        correct_option: "4"
      }
    ]
  },
  {
    quizID: "enc2",
    subjectID: "english",
    name: "Spelling Bee",
    type: "static",
    totalQuestions: 20,
    passage:
    {
      title: "The Swiss Family Robinson",
      author: "Johann David Wyss (2)",
      synopsis: "",
      text: ""
    },
    questions: [
      {
        difficulty: 1,
        question_text: "At what time of year is the passage set?",
        options: ["winter", "spring", "rainy season", "mid-summer", "autumn"],
        correct_option: "spring"
      },
      {
        difficulty: 1,
        question_text: "The father compares himself and his family to prisoners set free. Why? (lines 2–3)",
        options: [
          "They had been held hostage by pirates.",
          "They had been trapped in their cave",
          "They had been trapped in their house due to stormy weather.",
          "They had been caught in heavy rain which had finally stopped.",
          "They had been unfairly accused of crimes but the accusations had been dropped."
        ],
        correct_option: "They had been trapped in their house due to stormy weather."
      },
      {
        difficulty: 2,
        question_text: "‘The winds at length were lulled’ (line 1) What is another way of saying ‘lulled’?",
        options: ["rhythmic", "weakened", "welcomed", "rocked", "calmed"],
        correct_option: "calmed"
      },
      {
        difficulty: 2,
        question_text: "Why might the author have decided to include water references in the first paragraph? (lines 1–5)",
        options: [
          "The heavy rain had recently stopped.",
          "Rain was still falling heavily.",
          "Water makes the setting seem more peaceful.",
          "The family hadn’t had a drink for a long time.",
          "The family have found themselves on an island surrounded by water."
        ],
        correct_option: "The heavy rain had recently stopped."
      },
      {
        difficulty: 1,
        question_text: "How many adjectives can you count in the sentence beginning “We refreshed our eyes…”? (lines 3–5)",
        options: ["1", "2", "3", "4", "5"],
        correct_option: "4"
      }
    ]
  },
  {
    quizID: "enc3",
    subjectID: "english",
    name: "Reading Comp",
    type: "static",
    totalQuestions: 20,
    passage:
    {
      title: "The Swiss Family Robinson",
      author: "Johann David Wyss (3)",
      synopsis: "",
      text: ""
    },
    questions: [
      {
        difficulty: 1,
        question_text: "At what time of year is the passage set?",
        options: ["winter", "spring", "rainy season", "mid-summer", "autumn"],
        correct_option: "spring"
      },
      {
        difficulty: 1,
        question_text: "The father compares himself and his family to prisoners set free. Why? (lines 2–3)",
        options: [
          "They had been held hostage by pirates.",
          "They had been trapped in their cave",
          "They had been trapped in their house due to stormy weather.",
          "They had been caught in heavy rain which had finally stopped.",
          "They had been unfairly accused of crimes but the accusations had been dropped."
        ],
        correct_option: "They had been trapped in their house due to stormy weather."
      },
      {
        difficulty: 2,
        question_text: "‘The winds at length were lulled’ (line 1) What is another way of saying ‘lulled’?",
        options: ["rhythmic", "weakened", "welcomed", "rocked", "calmed"],
        correct_option: "calmed"
      },
      {
        difficulty: 2,
        question_text: "Why might the author have decided to include water references in the first paragraph? (lines 1–5)",
        options: [
          "The heavy rain had recently stopped.",
          "Rain was still falling heavily.",
          "Water makes the setting seem more peaceful.",
          "The family hadn’t had a drink for a long time.",
          "The family have found themselves on an island surrounded by water."
        ],
        correct_option: "The heavy rain had recently stopped."
      },
      {
        difficulty: 1,
        question_text: "How many adjectives can you count in the sentence beginning “We refreshed our eyes…”? (lines 3–5)",
        options: ["1", "2", "3", "4", "5"],
        correct_option: "4"
      }
    ]
  },
  {
    quizID: "vr1",
    subjectID: "vr",
    name: "VR Topic 1",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "vr2",
    subjectID: "vr",
    name: "VR Topic 2",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "vr3",
    subjectID: "vr",
    name: "VR Topic 3",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "vrc1",
    subjectID: "vr",
    name: "VR Challenge 1",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "vrc2",
    subjectID: "vr",
    name: "VR Challenge 2",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "vrc3",
    subjectID: "vr",
    name: "VR Challenge 3",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "nvr1",
    subjectID: "nvr",
    name: "NVR Topic 1",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "nvr2",
    subjectID: "nvr",
    name: "NVR Topic 2",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "nvr3",
    subjectID: "nvr",
    name: "NVR Topic 3",
    type: "dynamic",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "(1.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 1,
        question_text: "(1.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 1,
        question_text: "(1.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 2,
        question_text: "(2.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 2,
        question_text: "(2.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 3,
        question_text: "(3.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 3,
        question_text: "(3.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 4,
        question_text: "(4.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 4,
        question_text: "(4.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 4,
        question_text: "(4.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }, 
      {
        difficulty: 5,
        question_text: "(5.1) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.2) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.3) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.4) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.5) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.6) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.7) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.8) What is 345 + 345?",
        options: ["680", "685", "690", "695", "700"],
        correct_option: "690"
      },
      {
        difficulty: 5,
        question_text: "(5.9) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      },
      {
        difficulty: 5,
        question_text: "(5.10) Which number is even?",
        options: ["2", "7", "11", "15", "17"],
        correct_option: "2"
      }
    ]
  },
  {
    quizID: "nvrc1",
    subjectID: "nvr",
    name: "NVR Challenge 1",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "nvrc2",
    subjectID: "nvr",
    name: "NVR Challenge 2",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  },
  {
    quizID: "nvrc3",
    subjectID: "nvr",
    name: "NVR Challenge 3",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 2,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      },
      {
        difficulty: 1,
        question_text: "What is the area of the square below?",
        question_image: "/images/square.png",
        options: ["7", "8", "9", "10", "16"],
        correct_option: "16"
      },
      {
        difficulty: 1,
        question_text: "Which number is even?",
        options: ["3", "7", "10", "15", "17"],
        correct_option: "10"
      },
      {
        difficulty: 2,
        question_text: "What is 100 - 25?",
        options: ["50", "65", "75", "85", "95"],
        correct_option: "75"
      },
      {
        difficulty: 2,
        question_text: "What is 6 x 6?",
        options: ["30", "36", "42", "48", "54"],
        correct_option: "36"
      }
    ]
  }
];

module.exports = { quizData };