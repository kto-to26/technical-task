import "./feedback.scss"




function Feedback(props) {
    
    const data = props.feedback

    console.log(data);

   return(
   
    <div className="feedbackBlock">
        <div className="feedbackBlock-content">
            <div className="feedbackBlock-up">
                <div className="feedback-img"></div>
                <div className="feedback-names">
                    <h2>{data.id}</h2>
                    <p>
                        {data.name}
                    </p>
                </div>
            </div>
            <div className="feedback-stars">★★★★★</div>
            <div className="feedbackBlock-down">
                {data.text}
            </div>
        </div>
    </div>

   )

}

export default Feedback