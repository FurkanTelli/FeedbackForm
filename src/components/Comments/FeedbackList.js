import React from 'react';
import { store, useContext } from '../Context';
import "./FeedbackList.css";


function FeedbackList() {
    const {feedbackList, setFeedbackList} = useContext(store);

    const deleteFeedback = (removeId) => {
        setFeedbackList(feedbackList.filter((x) => x.id !== removeId))
    }

    return (
        <>
            <div className='output-comments'>
                {feedbackList.map((feedback) => (
                    <div key={Math.random()}
                    className={`output-todo-card`}>
                        <div key={Math.random()} className='num-display'>{feedback.rating}</div>
                        <p>{feedback.content}
                        </p>
                        <button className='delete-btn' onClick={() => deleteFeedback(feedback.id)}>X</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FeedbackList;