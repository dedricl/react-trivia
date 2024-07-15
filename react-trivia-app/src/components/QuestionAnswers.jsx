import { useState } from "react";

const triviaData = [
  {
    question: "What is the capital of Ohio?",
    choices: ["Akron", "Pittsburgh", "Columbus"],
    answer: "Columbus",
  },
  {
    question: "What the name of 2024 movie character staring a giant ape?",
    choices: ["King Kong", "Casear", "Godzilla"],
    answer: "King Kong",
  },
  {
    question: "Who won the most Super Bowls?",
    choices: ["Tom Brady", "Joe Montana", "Terry Bradshaw"],
    answer: "Tom Brady",
  },
  {
    question:
      " Ketchup is a sauce traditionally with a base of what ingredient?",
    choices: ["Carrots", "Tomatoes", "Cherries"],
    answer: "Tomatoes",
  },
  {
    question: "Fencing is a sport involving what?",
    choices: ["Pencils", "Sticks", "Swords"],
    answer: "Swords",
  },
  {
    question:
      "The character 'Bowser' is the primary antagonist of what series?",
    choices: ["Mario", "Zelda", "Madden"],
    answer: "Mario",
  },
  {
    question: "What famous food is Chicago known for?",
    choices: ["Deep dish pizza", "Hot Dogs", "Ribs"],
    answer: "Deep dish pizza",
  },
  {
    question: "What is the largest organ inside the body?",
    choices: ["Brian", "Heart", "Liver"],
    answer: "Liver",
  },
  {
    question: "The lollipops with gum in the center are?",
    choices: ["lollipops", "Blow Pops", "Sour Patch"],
    answer: "Blow Pops",
  },
  {
    question: "What do Llamas like to eat?",
    choices: ["Plants", "Insects", "Dirt"],
    answer: "Plants",
  },
  {
    question: "Where would you find the cornea?",
    choices: ["Foot", "Stomach", "Eye"],
    answer: "Eye",
  },
  {
    question: "What is the largest city in Australia?",
    choices: ["Sydney", "London", "Toronto"],
    answer: "Sydney",
  },
  {
    question: "Which of the following is the world's 6th largest country?",
    choices: ["Germany", "India", "Pakistan"],
    answer: "Pakistan",
  },
  {
    question: "How old was Tiger Woods when he won his first Masters title?",
    choices: ["18", "21", "27"],
    answer: "21",
  },
  {
    question: "Which Disney film features a superhero family with superpowers?",
    choices: ["The Incredibles", "Lion King", "Frozen"],
    answer: "The Incredibles",
  },
  {
    question: "Which type of fruit is known as Plantain?",
    choices: ["Apple", "Banana", "Orange"],
    answer: "Banana",
  },
  {
    question: "What character in the Toy Story movies is voiced by Tom Hanks?",
    choices: ["Woody", "Turbo", "Amy"],
    answer: "Woody",
  },
  {
    question: "Columbia is the capital of which American state?",
    choices: ["South Carolina", "North Carolina", "Maine"],
    answer: "South Carolina",
  },
  {
    question:
      "What is it called when a basketball player catches the ball in mid air and dunks?",
    choices: ["Assist", "Pick and Row", "Alley-oop"],
    answer: "Alley-oop",
  },
  {
    question:
      "Alice baked 30 cookies, but Betty cooked 50% more. How many did Betty make?",
    choices: ["30", "45", "60"],
    answer: "45",
  },
];

function QuestionAnswers() {
  let [index, setIndex] = useState(0);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState("hidden");
  let [display, setDisplay] = useState("open");

  function handleNext() {
    if (triviaData.length === index + 1) {
      setShowResult((showResult = "score"));
      setDisplay((display = "hidden"));
    } else {
      setIndex(index + 1);
      setLock(false);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
      setLock(false);
    }
  }

  function handleChoice(e) {
    if (lock === false) {
      let choice = e.target.textContent;
      let answer = triviaData[index].answer;
      if (choice === answer) {
        e.target.className = "correct";
        setScore(score + 1);
        setLock(true);
      } else {
        e.target.className = "wrong";
        setLock(true);
      }
    }
  }

  return (
    <>
      <div className={showResult}>
        Your score is {score} out of {triviaData.length}
      </div>
      <div className={display}>
        <h2>{triviaData[index].question}</h2>
        <ul>
          {triviaData[index].choices.map((item) => (
            <li key={item} onClick={(e) => handleChoice(e)}>
              {item}
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button className="prev" onClick={handlePrev}>
            Previous
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </div>
        <p className="num-questions">
          {index + 1} out of {triviaData.length} questions
        </p>
      </div>
    </>
  );
}
export default QuestionAnswers;
