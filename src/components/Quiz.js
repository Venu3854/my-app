import React, { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    options: ["H", "O", "W", "HO"],
    answer: "H2O",
  },
  {
    id: 4,
    question: "What is the tallest mammal?",
    options: ["Elephant", "Giraffe", "Kangaroo", "Lion"],
    answer: "Giraffe",
  },
  {
    id: 5,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    id: 7,
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Jupiter", "Mars", "Venus", "Mercury"],
    answer: "Mars",
  },
  {
    id: 8,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Cytoplasm", "Mitochondria", "Cell Membrane"],
    answer: "Mitochondria",
  },
  {
    id: 9,
    question: "Who is known as the 'Father of Computers'?",
    options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage"],
    answer: "Charles Babbage",
  },
  {
    id: 10,
    question: "What year did the Titanic sink?",
    options: ["1910", "1912", "1914", "1916"],
    answer: "1912",
  },
];

const Quiz = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(quizQuestions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [dscore, setDScore] = useState(0);

  const handleQuestion = (inc) => {
    if (questionNo < quizQuestions.length) {
      setQuestionNo(questionNo + inc);
    }
  };

  const handleOptionChange = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionNo] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const calculateScore = () => {
    let scr = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (
        selectedOption ===
        quizQuestions[index].options.indexOf(quizQuestions[index].answer)
      ) {
        scr = scr + 1;
      }
    });
    setScore(scr);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <h3>{quizQuestions[questionNo].question}</h3>
      <div>
        {quizQuestions[questionNo].options.map((option, optionIndex) => {
          return (
            <div key={optionIndex}>
              <input
                type="radio"
                id={option + optionIndex}
                name={"question" + questionNo}
                checked={selectedOptions[questionNo] === optionIndex}
                value={optionIndex}
                onChange={() => handleOptionChange(optionIndex)}
              />
              <label htmlFor={option + optionIndex}>{option}</label>
            </div>
          );
        })}
      </div>
      <button
        style={{ marginRight: "5px" }}
        disabled={questionNo === 0}
        onClick={() => handleQuestion(-1)}
      >
        Prev Question
      </button>
      <button
        disabled={questionNo === quizQuestions.length - 1}
        onClick={() => handleQuestion(1)}
      >
        Next Question
      </button>
      <button onClick={calculateScore}>Submit Answers</button>
      <h1>{score}</h1>
      <h1>{dscore}</h1>
    </div>
  );
};

export default Quiz;
