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
    name: "Fractions",
    type: "static",
    totalQuestions: 20,
    questions: [
      {
        difficulty: 1,
        question_text: "What is 1/4 + 1/4? Give your answer in its simplest form.",
        options: ["1/8", "2/8", "1/2", "2/4", "1/4"],
        correct_option: "1/2",
        explanation: "1/4 + 1/4 = 2/4. When simplified, 2/4 is equal to 1/2."
      },
      {
        difficulty: 1,
        question_text: "Which of these is an equivalent fraction to 1/2?",
        options: ["2/3", "3/6", "4/10", "1/4", "5/12"],
        correct_option: "3/6",
        explanation: "3/6 is equivalent to 1/2 because 3 is exactly half of 6."
      },
      {
        difficulty: 2,
        question_text: "What is 3/5 - 1/5?",
        options: ["2/0", "4/5", "2/10", "2/5", "3/10"],
        correct_option: "2/5",
        explanation: "Since the denominators are the same, subtract the numerators: 3 - 1 = 2. The answer is 2/5."
      },
      {
        difficulty: 2,
        question_text: "What is 1/2 of 40?",
        options: ["10", "15", "20", "25", "30"],
        correct_option: "20",
        explanation: "To find 1/2 of a number, divide it by 2. 40 ÷ 2 = 20."
      },
      {
        difficulty: 1,
        question_text: "Convert 0.75 into a fraction.",
        options: ["1/4", "1/2", "3/4", "3/5", "7/5"],
        correct_option: "3/4",
        explanation: "0.75 is three-quarters, which is written as 3/4."
      },
      {
        difficulty: 1,
        question_text: "What is 1/3 of 21?",
        options: ["3", "6", "7", "9", "12"],
        correct_option: "7",
        explanation: "To find 1/3, divide 21 by 3. 21 ÷ 3 = 7."
      },
      {
        difficulty: 2,
        question_text: "What is 2/3 + 1/6?",
        options: ["3/9", "5/6", "3/6", "1/2", "4/6"],
        correct_option: "5/6",
        explanation: "Convert 2/3 to 4/6 to match denominators. 4/6 + 1/6 = 5/6."
      },
      {
        difficulty: 2,
        question_text: "What is 3/4 x 1/2?",
        options: ["4/6", "2/4", "3/8", "3/6", "4/8"],
        correct_option: "3/8",
        explanation: "Multiply numerators (3x1=3) and denominators (4x2=8). The answer is 3/8."
      },
      {
        difficulty: 1,
        question_text: "Simplify the fraction 10/20.",
        options: ["1/10", "1/2", "2/5", "5/10", "1/4"],
        correct_option: "1/2",
        explanation: "Both 10 and 20 can be divided by 10. 10 ÷ 10 = 1 and 20 ÷ 10 = 2."
      },
      {
        difficulty: 1,
        question_text: "Which fraction is the largest?",
        options: ["1/8", "1/4", "1/2", "1/10", "1/3"],
        correct_option: "1/2",
        explanation: "When the numerator is 1, the smaller the denominator, the larger the fraction."
      },
      {
        difficulty: 2,
        question_text: "What is 1/2 divided by 2?",
        options: ["1", "1/4", "2/2", "1/2", "4/1"],
        correct_option: "1/4",
        explanation: "Dividing a half in half results in a quarter (1/4)."
      },
      {
        difficulty: 2,
        question_text: "What is 2/5 of 50?",
        options: ["10", "15", "20", "25", "30"],
        correct_option: "20",
        explanation: "1/5 of 50 is 10. Therefore, 2/5 is 20."
      },
      {
        difficulty: 2,
        question_text: "Calculate 5/8 - 1/4.",
        options: ["4/4", "4/8", "3/8", "1/2", "6/8"],
        correct_option: "3/8",
        explanation: "Convert 1/4 to 2/8. 5/8 - 2/8 = 3/8."
      },
      {
        difficulty: 1,
        question_text: "What is 4/10 as a percentage?",
        options: ["4%", "14%", "40%", "44%", "0.4%"],
        correct_option: "40%",
        explanation: "4/10 is the same as 40/100, which is 40%."
      },
      {
        difficulty: 2,
        question_text: "What is 2/3 of 18?",
        options: ["6", "9", "12", "15", "18"],
        correct_option: "12",
        explanation: "1/3 of 18 is 6. Multiply by 2 to get 12."
      },
      {
        difficulty: 2,
        question_text: "Which of these is an improper fraction?",
        options: ["1/2", "3/4", "5/4", "9/10", "2/3"],
        correct_option: "5/4",
        explanation: "An improper fraction is where the numerator is larger than the denominator."
      },
      {
        difficulty: 1,
        question_text: "How many quarters (1/4) make a whole?",
        options: ["1", "2", "3", "4", "5"],
        correct_option: "4",
        explanation: "Four quarters (4/4) equals one whole."
      },
      {
        difficulty: 1,
        question_text: "What is 0.2 as a fraction?",
        options: ["1/2", "1/5", "1/20", "2/5", "1/4"],
        correct_option: "1/5",
        explanation: "0.2 is 2/10, which simplifies to 1/5."
      },
      {
        difficulty: 2,
        question_text: "What is 4/5 + 1/10?",
        options: ["5/15", "9/10", "5/10", "1/2", "8/10"],
        correct_option: "9/10",
        explanation: "Convert 4/5 to 8/10. 8/10 + 1/10 = 9/10."
      },
      {
        difficulty: 2,
        question_text: "What is 1/5 x 1/5?",
        options: ["2/5", "1/10", "2/10", "1/25", "5/5"],
        correct_option: "1/25",
        explanation: "Multiply the numerators (1x1=1) and the denominators (5x5=25). Result: 1/25."
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
        question_text: "(1.1) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 1,
        question_text: "(1.2) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q2.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 1,
        question_text: "(1.3) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q3.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "(1.4) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q4.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "(1.5) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q5.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "N"
      },
      {
        difficulty: 1,
        question_text: "(1.6) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q6.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "C"
      },
      {
        difficulty: 1,
        question_text: "(1.7) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q7.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 1,
        question_text: "(1.8) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q8.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "(1.9) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q9.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 1,
        question_text: "(1.10) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "(2.1) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "(2.2) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q2.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 2,
        question_text: "(2.3) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q3.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "(2.4) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q4.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "(2.5) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q5.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "N"
      },
      {
        difficulty: 2,
        question_text: "(2.6) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q6.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "C"
      },
      {
        difficulty: 2,
        question_text: "(2.7) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q7.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "(2.8) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q8.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "(2.9) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q9.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 2,
        question_text: "(2.10) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 3,
        question_text: "(3.1) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 3,
        question_text: "(3.2) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q2.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 3,
        question_text: "(3.3) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q3.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 3,
        question_text: "(3.4) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q4.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 3,
        question_text: "(3.5) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q5.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "N"
      },
      {
        difficulty: 3,
        question_text: "(3.6) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q6.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "C"
      },
      {
        difficulty: 3,
        question_text: "(3.7) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q7.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 3,
        question_text: "(3.8) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q8.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 3,
        question_text: "(3.9) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q9.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 3,
        question_text: "(3.10) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 4,
        question_text: "(4.1) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 4,
        question_text: "(4.2) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q2.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 4,
        question_text: "(4.3) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q3.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 4,
        question_text: "(4.4) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q4.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 4,
        question_text: "(4.5) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q5.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "N"
      },
      {
        difficulty: 4,
        question_text: "(4.6) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q6.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "C"
      },
      {
        difficulty: 4,
        question_text: "(4.7) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q7.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 4,
        question_text: "(4.8) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q8.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 4,
        question_text: "(4.9) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q9.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 4,
        question_text: "(4.10) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 5,
        question_text: "(5.1) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 5,
        question_text: "(5.2) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q2.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 5,
        question_text: "(5.3) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q3.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 5,
        question_text: "(5.4) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q4.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 5,
        question_text: "(5.5) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q5.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "N"
      },
      {
        difficulty: 5,
        question_text: "(5.6) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q6.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "C"
      },
      {
        difficulty: 5,
        question_text: "(5.7) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q7.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
      {
        difficulty: 5,
        question_text: "(5.8) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q8.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "B"
      },
      {
        difficulty: 5,
        question_text: "(5.9) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q9.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "A"
      },
      {
        difficulty: 5,
        question_text: "(5.10) In these sentences there are some spelling mistakes. On each line there is either one mistake or no mistake. Find the group of words with the mistake in it. If there is no mistake, choose N.",
        question_image: "/images/EN2_Q1.png",
        options: ["A", "B", "C", "D", "N"],
        correct_option: "D"
      },
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
    totalQuestions: 10,
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
      },
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
    name: "Similes",
    type: "static",
    totalQuestions: 10,
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
      },
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
    totalQuestions: 10,
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
      },
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
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (metal though)",
        options: ["m", "e", "t", "a", "l"],
        correct_option: "t"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (liner bother)",
        options: ["l", "i", "n", "e", "r"],
        correct_option: "r"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (biased pant)",
        options: ["b", "i", "a", "s", "d"],
        correct_option: "i"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (chomp tea)",
        options: ["c", "h", "o", "m", "p"],
        correct_option: "m"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (player fight)",
        options: ["p", "l", "a", "y", "r"],
        correct_option: "l"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (metal though)",
        options: ["m", "e", "t", "a", "l"],
        correct_option: "t"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (liner bother)",
        options: ["l", "i", "n", "e", "r"],
        correct_option: "r"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (biased pant)",
        options: ["b", "i", "a", "s", "d"],
        correct_option: "i"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (chomp tea)",
        options: ["c", "h", "o", "m", "p"],
        correct_option: "m"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (player fight)",
        options: ["p", "l", "a", "y", "r"],
        correct_option: "l"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (metal though)",
        options: ["m", "e", "t", "a", "l"],
        correct_option: "t"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (liner bother)",
        options: ["l", "i", "n", "e", "r"],
        correct_option: "r"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (biased pant)",
        options: ["b", "i", "a", "s", "d"],
        correct_option: "i"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (chomp tea)",
        options: ["c", "h", "o", "m", "p"],
        correct_option: "m"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (player fight)",
        options: ["p", "l", "a", "y", "r"],
        correct_option: "l"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (metal though)",
        options: ["m", "e", "t", "a", "l"],
        correct_option: "t"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (liner bother)",
        options: ["l", "i", "n", "e", "r"],
        correct_option: "r"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (biased pant)",
        options: ["b", "i", "a", "s", "d"],
        correct_option: "i"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (chomp tea)",
        options: ["c", "h", "o", "m", "p"],
        correct_option: "m"
      },
      {
        difficulty: 1,
        question_text: "In this question, one letter can be moved from the first word to the second word to make two new words. (player fight)",
        options: ["p", "l", "a", "y", "r"],
        correct_option: "l"
      },
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
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q1.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q2.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q3.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q4.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q5.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q1.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q2.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q3.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q4.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q5.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q1.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q2.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q3.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q4.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q5.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q1.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q2.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q3.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
      {
        difficulty: 2,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q4.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "B"
      },
      {
        difficulty: 1,
        question_text: "Answer the Question below:",
        question_image: "/images/NVR_C1_Q5.png",
        options: ["A", "B", "C", "D", "E"],
        correct_option: "D"
      },
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