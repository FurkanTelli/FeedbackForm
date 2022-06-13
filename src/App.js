import "./App.css";
import React from "react";
import FeedbackForm from "./components/CardComponent/FeedbackForm";
import FeedbackStats from "./components/FeedBack/FeedbackStats";
import { store } from "./components/Context";
import { useState } from "react";
import FeedbackList from "./components/Comments/FeedbackList";

const initialComment = [
  { id: Math.random(), content: "First Comment", rating: 7 },
  { id: Math.random(), content: "second Comment", rating: 9 },
];

function App() {

  const [feedbackList, setFeedbackList] = useState(initialComment);

  const data = {
    feedbackList,
    setFeedbackList,
    initialComment
  };

  return (
    <store.Provider value={data}>
      <div className="application">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </store.Provider>
  );
}

export default App;
