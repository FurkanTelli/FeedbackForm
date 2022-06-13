import React, { useState, useEffect } from "react";
import "./FeedbackStats.css";
import {store, useContext} from "../Context";
// import Comments from "../Comments/Comments";

function FeedbackStats() {
    const {feedbackList} = useContext(store)
    const [averageRating, setAverageRating] = useState(0)

    useEffect( () => {
        let sumRate = 0;

        console.log(feedbackList.length)
        console.log(feedbackList)
        for (let i = 0; i < feedbackList.length; i++) {
            const feedback = feedbackList[i];
            let rate = +feedback.rating
            sumRate = sumRate + rate
            console.log(sumRate)
        }
        setAverageRating(Math.floor(sumRate / feedbackList.length))

    }, [feedbackList])


    return (
        <div className="stats">
            <h4>{feedbackList.length} Reviews</h4>
            <h4>Ratings Awarage : {isNaN(averageRating) ? 0 : averageRating}</h4>
        </div>
    )
}
export default FeedbackStats;

