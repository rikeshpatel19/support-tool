const mongoose = require('mongoose');
const Exam = require('./models/Exam');
require('dotenv').config();

const examData = [
  {
    examID: "me1",
    title: "Maths Mock Exam 1",
    subjectID: "maths",
    timeLimit: 3000, // 50 minutes
    totalQuestions: 50,
    questions: [
      { question_text: "What is this number in figures? Five thousand, one hundred and nine.", options: ["5190", "5019", "519", "51009", "5109"], correct_option: "5109", explanation: "5000 + 100 + 9 = 5109." },
      { question_text: "Boat symbol stands for 12 ships. Dock A has 3.5 symbols. Dock C has 3 symbols. How many more ships are in dock A than dock C?", options: ["0.5", "1", "3", "4", "6"], correct_option: "6", explanation: "Difference is 0.5 symbols. 0.5 * 12 = 6." },
      { question_text: "What is the value of the 7 in the number 7240?", options: ["7 thousands", "7 hundreds", "7 tens", "7 ones", "7 thousandths"], correct_option: "7 thousands", explanation: "The 7 is in the thousands column." },
      { question_text: "Which of these numbers is exactly divisible by 3 and 7?", options: ["7", "10", "14", "21", "24"], correct_option: "21", explanation: "21 is a multiple of both 3 (3x7) and 7 (7x3)." },
      { question_text: "Which of these numbers is the smallest?", options: ["0.67", "0.6", "0.06", "0.66", "0.066"], correct_option: "0.06", explanation: "0.06 is the smallest decimal value." },
      { question_text: "What is the remainder when 427 is divided by 4?", options: ["0", "1", "2", "3", "4"], correct_option: "3", explanation: "424 is divisible by 4, leaving a remainder of 3." },
      { question_text: "Which of these numbers is 100 times larger than 5.6?", options: ["56", "560", "5600", "0.56", "0.056"], correct_option: "560", explanation: "5.6 * 100 = 560." },
      { question_text: "What is the missing number? 144 / ___ = 12", options: ["10", "11", "12", "13", "14"], correct_option: "12", explanation: "12 * 12 = 144." },
      { question_text: "A train leaves at 14:15 and arrives at 15:42. How long was the journey?", options: ["1h 12m", "1h 27m", "1h 37m", "1h 45m", "2h 15m"], correct_option: "1h 27m", explanation: "14:15 to 15:15 is 1h. 15:15 to 15:42 is 27m." },
      { question_text: "What is 15% of £80?", options: ["£8", "£10", "£12", "£14", "£15"], correct_option: "£12", explanation: "10% is £8, 5% is £4. Total: £12." },
      { question_text: "Which of these is the next prime number after 17?", options: ["18", "19", "21", "23", "27"], correct_option: "19", explanation: "19 is only divisible by 1 and itself." },
      { question_text: "Change 3.4kg into grams.", options: ["34g", "340g", "3400g", "34000g", "0.34g"], correct_option: "3400g", explanation: "3.4 * 1000 = 3400." },
      { question_text: "How many lines of symmetry does a square have?", options: ["1", "2", "3", "4", "0"], correct_option: "4", explanation: "Squares have vertical, horizontal, and 2 diagonal lines." },
      { question_text: "Which of these is 3/4 as a decimal?", options: ["0.3", "0.4", "0.75", "0.25", "0.34"], correct_option: "0.75", explanation: "3 divided by 4 is 0.75." },
      { question_text: "A box holds 48 eggs. How many eggs are in 5 boxes?", options: ["200", "240", "250", "190", "280"], correct_option: "240", explanation: "48 * 5 = 240." },
      { question_text: "What is 725 rounded to the nearest 100?", options: ["700", "720", "730", "800", "750"], correct_option: "700", explanation: "725 is closer to 700 than 800." },
      { question_text: "Find the mean of these numbers: 5, 8, 11", options: ["5", "8", "11", "24", "9"], correct_option: "8", explanation: "Sum (24) / Count (3) = 8." },
      { question_text: "What is the size of each angle in an equilateral triangle?", options: ["45°", "60°", "90°", "180°", "120°"], correct_option: "60°", explanation: "180 / 3 = 60." },
      { question_text: "Simplify the ratio 15 : 25", options: ["1:2", "3:5", "5:3", "3:4", "2:3"], correct_option: "3:5", explanation: "Both numbers divided by 5 equals 3 and 5." },
      { question_text: "What is the area of a rectangle 8cm long and 4cm wide?", options: ["12cm²", "24cm²", "32cm²", "16cm²", "40cm²"], correct_option: "32cm²", explanation: "8 * 4 = 32." },
      { question_text: "How many millilitres are in 0.5 litres?", options: ["5ml", "50ml", "500ml", "5000ml", "0.05ml"], correct_option: "500ml", explanation: "0.5 * 1000 = 500." },
      { question_text: "Calculate 156 + 287.", options: ["433", "443", "453", "343", "434"], correct_option: "443", explanation: "156 + 287 = 443." },
      { question_text: "A coat costing £60 is reduced by 20% in a sale. What is the new price?", options: ["£40", "£48", "£50", "£12", "£52"], correct_option: "£48", explanation: "20% of £60 is £12. £60 - £12 = £48." },
      { question_text: "Which of these is a multiple of 8?", options: ["4", "12", "18", "24", "30"], correct_option: "24", explanation: "8 * 3 = 24." },
      { question_text: "What is the missing number? 3x - 5 = 10", options: ["3", "5", "15", "2", "10"], correct_option: "5", explanation: "3x = 15, so x = 5." },
      { question_text: "How many degrees are in a circle?", options: ["90°", "180°", "270°", "360°", "400°"], correct_option: "360°", explanation: "A full turn is 360 degrees." },
      { question_text: "Which fraction is equivalent to 2/3?", options: ["4/9", "6/9", "3/2", "1/3", "4/5"], correct_option: "6/9", explanation: "2/3 * 3/3 = 6/9." },
      { question_text: "A recipe needs 250g of flour for 4 people. How much for 12 people?", options: ["500g", "750g", "1000g", "1250g", "300g"], correct_option: "750g", explanation: "12 is 3x more than 4. 250g * 3 = 750g." },
      { question_text: "What is the perimeter of a regular hexagon with 5cm sides?", options: ["25cm", "30cm", "35cm", "20cm", "40cm"], correct_option: "30cm", explanation: "6 sides * 5cm = 30cm." },
      { question_text: "Which of these numbers is 0.45 as a fraction?", options: ["4/5", "45/10", "9/20", "4/50", "1/2"], correct_option: "9/20", explanation: "45/100 simplified by 5 is 9/20." },
      { question_text: "Calculate 1.2 x 5.", options: ["0.6", "6.0", "60", "0.06", "5.2"], correct_option: "6.0", explanation: "1.2 * 5 = 6.0." },
      { question_text: "What is the square of 11?", options: ["22", "110", "121", "131", "111"], correct_option: "121", explanation: "11 * 11 = 121." },
      { question_text: "How many minutes are in 2.5 hours?", options: ["120", "130", "150", "160", "250"], correct_option: "150", explanation: "2 hours = 120 mins, 0.5 hours = 30 mins. Total: 150." },
      { question_text: "What is the cube root of 27?", options: ["3", "9", "81", "2.7", "7"], correct_option: "3", explanation: "3 * 3 * 3 = 27." },
      { question_text: "Find 2/5 of 40.", options: ["8", "16", "20", "24", "10"], correct_option: "16", explanation: "40 / 5 = 8. 8 * 2 = 16." },
      { question_text: "How many vertices does a triangle-based pyramid have?", options: ["3", "4", "5", "6", "8"], correct_option: "4", explanation: "3 at the base, 1 at the top." },
      { question_text: "If x = 4 and y = 3, what is 2x + y?", options: ["11", "14", "7", "10", "12"], correct_option: "11", explanation: "(2 * 4) + 3 = 11." },
      { question_text: "Which of these is an obtuse angle?", options: ["45°", "90°", "125°", "180°", "270°"], correct_option: "125°", explanation: "Obtuse is between 90 and 180 degrees." },
      { question_text: "What is the sum of the angles in a quadrilateral?", options: ["90°", "180°", "270°", "360°", "540°"], correct_option: "360°", explanation: "All four-sided shapes have 360 degrees." },
      { question_text: "A map scale is 1cm to 5km. How far is 4.5cm?", options: ["9km", "20km", "22.5km", "25km", "45km"], correct_option: "22.5km", explanation: "4.5 * 5 = 22.5." },
      { question_text: "Which of these is a factor of 56?", options: ["6", "9", "7", "5", "12"], correct_option: "7", explanation: "7 * 8 = 56." },
      { question_text: "Calculate 0.08 x 1000.", options: ["0.8", "8", "80", "800", "0.008"], correct_option: "80", explanation: "Move decimal 3 places right." },
      { question_text: "Find the median of: 3, 7, 2, 9, 5", options: ["2", "3", "5", "7", "9"], correct_option: "5", explanation: "Ordered: 2, 3, 5, 7, 9. Middle is 5." },
      { question_text: "A bag has 4 red and 6 blue marbles. What is the chance of picking a red?", options: ["4/6", "2/5", "1/2", "3/5", "4/10"], correct_option: "2/5", explanation: "4/10 simplifies to 2/5." },
      { question_text: "What is 4 squared plus 3 squared?", options: ["7", "14", "25", "49", "12"], correct_option: "25", explanation: "16 + 9 = 25." },
      { question_text: "How many seconds are in 4 minutes?", options: ["120", "200", "240", "300", "400"], correct_option: "240", explanation: "4 * 60 = 240." },
      { question_text: "What is the coordinates of the origin?", options: ["(1,1)", "(0,1)", "(1,0)", "(0,0)", "(-1,-1)"], correct_option: "(0,0)", explanation: "The origin is always at zero, zero." },
      { question_text: "Ali eats 1/3 of a 6-slice pizza. His sister eats 1/4 of the REMAINING. What fraction is left?", options: ["5/12", "1/2", "1/4", "1/12", "1/6"], correct_option: "1/2", explanation: "Ali eats 2 slices. 4 left. Sister eats 1/4 of 4 = 1 slice. 3 slices left. 3/6 = 1/2." },
      { question_text: "Roast meat: 30 mins at 230°C, then 30 mins per 450g. A piece takes 2.5 hours. How heavy is it?", options: ["2.25kg", "1.25kg", "1.8kg", "2.7kg", "1.35kg"], correct_option: "1.8kg", explanation: "2.5h - 30m = 2 hours (120 mins). 120 / 30 = 4 units of 450g. 4 * 450g = 1800g = 1.8kg." },
      { question_text: "To make brown paint, you mix 2 parts red, 17 parts yellow and 1 part blue. How much red paint for 40 litres total?", options: ["20 litres", "34 litres", "1.5 litres", "4 litres", "2 litres"], correct_option: "4 litres", explanation: "Total parts = 20. 40 / 20 = 2L per part. Red = 2 * 2 = 4L." }
    ]
  }
];

const seedExams = async () => {
  try {
    // Using Mongoose to connect to Atlas using the URI stored in the .env file
    await mongoose.connect(process.env.MONGO_URI);
    // Log a success message to the console once the connection is established
    console.log("Connected to database for seeding");
    // Clear existing exams to avoid duplicates every time the script runs
    await Exam.deleteMany({});
    // Insert the data
    await Exam.insertMany(examData);
    // Log a success message once all data is safely in the database
    console.log("Mock Exams seeded successfully!");
    // Terminate 
    process.exit();
    // If the try crashes, catch the error
  } catch (error) {
    // Log the specific error to the console to help with debugging
    console.error(error);
    // Terminate with error code (1) to indicate a failure
    process.exit(1);
  }
};

seedExams();