import Footer from "./components/Footer.jsx";
import QuestionAnswers from "./components/QuestionAnswers.jsx";

import "./index.css";

function App() {
  return (
    <>
      <h1>Trivia 2024 Edition</h1>
      <div className="container">
        <QuestionAnswers></QuestionAnswers>
        <Footer />
      </div>
    </>
  );
}

export default App;
