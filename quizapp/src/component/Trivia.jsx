import "../css/trivia.css";

import { useEffect, useState } from "react";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("null");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
  
    setSelectAnswer(a);
  
    setClassName("answer active");
  
    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 3000);
  
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)} >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
