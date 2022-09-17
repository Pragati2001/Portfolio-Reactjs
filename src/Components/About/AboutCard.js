import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pragati Kabra </span>
            from <span className="purple"> Jaipur, Rajasthan.</span>
            <br />I am CS final year student pursuing B.Tech from RTU,Kota
            <br />
            I am learning web development and apart from this
            <br />I have decent knowledge of
            <span className="purple">Data structure and algorithm</span>
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
