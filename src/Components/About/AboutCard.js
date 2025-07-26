import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Pragati Kabra</span>, a B.Tech graduate in Computer Science
            with a strong interest in data science. 
            I have hands-on experience in building AI models for 
            stock price prediction using <span className="purple">Python, Pandas, NumPy, TensorFlow, 
            and Keras.</span> I'm also familiar with machine learning techniques 
            and data preprocessing. Through the Newton Data Science Certification,
             I've gained skills in SQL, Excel, and Power BI. I have a solid 
             understanding of <span className="purple">data structures and problem-solving</span>. I'm passionate 
             about leveraging data to create impactful, real-world solutions.


            {/* Hi I am <span className="purple">Pragati Kabra</span>,Btech Graduate 
            from Computer Science Field             */}
            {/* Hi , I am <span className="purple">Pragati Kabra </span>,
            Btech Graduate in <span className="purple"> Computer Science field</span>,
            <br />with an aggregate of 9.89 CGPA.
            I have hands on 
            <br />I have decent knowledge of
            <span className="purple">Data structure and algorithm</span> */}
          </p>

          <br />
          <br />
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learning is the only thing the mind never exhausts,
            <br />
            never fears,and never regrets. "{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Leonardo da Vinci.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
