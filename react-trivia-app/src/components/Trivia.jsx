import { useState } from "react";

export const Trivia = () => {
  const triviaData = [
    {
      question: "What is the capital of Ohio?",
      a: "Akron",
      b: "Pittsburgh",
      c: "Columbus",
      answer: "Columbus",
    },
    {
      question: "What the name of 2024 movie character staring a giant ape?",
      a: "King Kong",
      b: "Casear",
      c: "Godzilla",
      answer: "King Kong",
    },
    {
      question: "Who won the most Super Bowls?",
      a: "Tom Brady",
      b: "Joe Montana",
      c: "Terry Bradshaw",
      answer: "Tom Brady",
    },
    {
      question:
        " Ketchup is a sauce traditionally with a base of what ingredient?",
      a: "Carrots",
      b: "Tomatoes",
      c: "Cherries",
      answer: "Tomatoes",
    },
    {
      question: "Fencing is a sport involving what?",
      a: "Pencils",
      b: "Sticks",
      c: "Swords",
      answer: "Swords",
    },
    {
      question:
        "The character 'Bowser' is the primary antagonist of what series?",
      a: "Mario",
      b: "Zelda",
      c: "Madden",
      answer: "Mario",
    },
    {
      question: "What famous food is Chicago known for?",
      a: "Deep dish pizza",
      b: "Hot Dogs",
      c: "Ribs",
      answer: "Deep dish pizza",
    },
    {
      question: "What is the largest organ inside the body?",
      a: "Brian",
      b: "Heart",
      c: "Liver",
      answer: "Liver",
    },
    {
      question: "The lollipops with gum in the center are?",
      a: "lollipops",
      b: "Blow Pops",
      c: "Sour Patch",
      answer: "Blow Pops",
    },
    {
      question: "What do Llamas like to eat?",
      a: "Plants",
      b: "Insects",
      c: "Dirt",
      answer: "Plants",
    },
    {
      question: "Where would you find the cornea?",
      a: "Foot",
      b: "Stomach",
      c: "Eye",
      answer: "Eye",
    },
    {
      question: "What is the largest city in Australia?",
      a: "Sydney",
      b: "London",
      c: "Toronto",
      answer: "Sydney",
    },
    {
      question: "Which of the following is the world's 6th largest country?",
      a: "Germany",
      b: "India",
      c: "Pakistan",
      answer: "Pakistan",
    },
    {
      question: "How old was Tiger Woods when he won his first Masters title?",
      a: "18",
      b: "21",
      c: "27",
      answer: "21",
    },
    {
      question:
        "Which Disney film features a superhero family with superpowers?",
      a: "The Incredibles",
      b: "Lion King",
      c: "Frozen",
      answer: "The Incredibles",
    },
    {
      question: "Which type of fruit is known as Plantain?",
      a: "Apple",
      b: "Banana",
      c: "Orange",
      answer: "Banana",
    },
    {
      question:
        "What character in the Toy Story movies is voiced by Tom Hanks?",
      a: "Woody",
      b: "Turbo",
      c: "Amy",
      answer: "Woody",
    },
    {
      question: "Columbia is the capital of which American state?",
      a: "South Carolina",
      b: "North Carolina",
      c: "Maine",
      answer: "South Carolina",
    },
    {
      question:
        "What is it called when a basketball player catches the ball in mid air and dunks?",
      a: "Assist",
      b: "Pick and Row",
      c: " Alley-oop",
      answer: "Alley-oop",
    },
    {
      question:
        "Alice baked 30 cookies, but Betty cooked 50% more. How many did Betty make?",
      a: "30",
      b: "45",
      c: "60",
      answer: "45",
    },
  ];

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(triviaData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let listItem = document.querySelectorAll("li");
  let result = document.querySelector(".result");
  let container = document.querySelector(".container");
  const nextButton = () => {
    if (index === triviaData.length - 1) {
      result.style.display = "block";
      container.style.display = "none";
    } else if (lock === true) {
      setIndex(++index);
      setQuestion(triviaData[index]);
      setLock(false);
      for (let index = 0; index < listItem.length; index++) {
        listItem[index].classList.remove("correct");
        listItem[index].classList.remove("wrong");
      }
    }
  };

  const prevButton = () => {
    if (index > 0) {
      setIndex(--index);
      setQuestion(triviaData[index]);
      setLock(false);
      for (let index = 0; index < listItem.length; index++) {
        listItem[index].classList.remove("correct");
        listItem[index].classList.remove("wrong");
      }
    }
  };

  const checkAnswer = (e, ans) => {
    if (lock === false) {
      if (question.answer === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
      }
    }
  };

  return (
    <>
      <div className="result">
        Your score is {score} out of {triviaData.length}
      </div>
      <div className="container">
        <h2>
          {index + 1}. {question.question}
        </h2>
        <ul>
          <li
            onClick={(e) => {
              checkAnswer(e, question.a);
            }}
          >
            {question.a}
          </li>
          <li
            onClick={(e) => {
              checkAnswer(e, question.b);
            }}
          >
            {question.b}
          </li>
          <li
            onClick={(e) => {
              checkAnswer(e, question.c);
            }}
          >
            {question.c}
          </li>
        </ul>
        <div className="button-container">
          <button className="prev" onClick={prevButton}>
            Previous
          </button>
          <button className="next" onClick={nextButton}>
            Next
          </button>
        </div>

        <p className="num-questions">
          {index + 1} out of {triviaData.length} questions
        </p>
      </div>
    </>
  );
};
