import React, {useState} from "react";
import { store, useContext } from "../Context";
import "./FeedbackForm.css";

const INITIAL_FEEDBACK = {text : "", rating: 0};

function FeedbackForm() {
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);

  const { feedbackList, setFeedbackList} = useContext(store);

  const updateFeedback = (e) => {
    e.preventDefault();
    setFeedback({...feedback, text: e.target.value});
  };

  const addFeedback = (e) => {
    e.preventDefault();

    if(feedback.text === "") {
      alert("lütfen bir değer yazınız")
      return;
    } 
    
    if(feedback.rating === 0) {
      alert("lütfen bir değer seçiniz")
      return;
    }

    setFeedbackList([
      ...feedbackList,
      { id: Math.random(), content: feedback.text, rating: feedback.rating },
    ]);

    setFeedback(INITIAL_FEEDBACK)
  };

  const handleRadio = (e) => {
    e.preventDefault()
    setFeedback({...feedback, rating: e.target.value})
    console.log(e.target.value)
  };

  return (
    <div className="main-card center-main">
      <header className="todo-card">
        <h2 className="card-header">
          How would you rate your service with us?
        </h2>
      </header>
      <form>
        <ul className="rating">
          <li >
            <input
              type="radio"
              id="num1"
              name="rating"
              value="1"
              onChange={handleRadio}
              checked={feedback.rating == 1}
            />
            <label htmlFor="num1">
              1
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num2"
              name="rating"
              value="2"
              
              onChange={handleRadio}
              checked={feedback.rating == 2}
            />
            <label htmlFor="num2" >
              2
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num4"
              name="rating"
              value="3"
              
              onChange={handleRadio}
              checked={feedback.rating == 3}
              />
            <label htmlFor="num3" >
              3
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num4"
              name="rating"
              value="4"
              
              onChange={handleRadio}
              checked={feedback.rating == 4}
            />
            <label htmlFor="num4" >
              4
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num5"
              name="rating"
              value="5"
              
              onChange={handleRadio}
              checked={feedback.rating == 5}
            />
            <label htmlFor="num5" >
              5
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num6"
              name="rating"
              value="6"
              
              onChange={handleRadio}
              checked={feedback.rating == 6}
            />
            <label htmlFor="num6" >
              6
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num7"
              name="rating"
              value="7"
              
              onChange={handleRadio}
              checked={feedback.rating == 7}
            />
            <label htmlFor="num7" >
              7
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num8"
              name="rating"
              value="8"
              
              onChange={handleRadio}
              checked={feedback.rating == 8}
            />
            <label htmlFor="num8" >
              8
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num9"
              name="rating"
              value="9"
              
              onChange={handleRadio}
              checked={feedback.rating == 9}
            />
            <label htmlFor="num9" >
              9
            </label>
          </li>
          <li >
            <input
              type="radio"
              id="num10"
              name="rating"
              value="10"
              
              onChange={handleRadio}
              checked={feedback.rating == 10}
            />
            <label htmlFor="num10" >
              10
            </label>
          </li>
        </ul>
        <div className="main-input-btn">
          <input
            onChange={updateFeedback}
            value={feedback.text}
            type="text"
            className="main-input"
            placeholder="Tell us something that keeps you coming back"
          />
          <button type="submit" onClick={addFeedback} className="main-btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
