import React from "react";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then(({ results }) => {
        this.setState({
          questions: results,
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Quiz app</h3>
        {this.state.questions === null ? (
          <div>loading...</div>
        ) : (
          this.state.questions.map((question, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: question.question }}
            ></div>
          ))
        )}
      </div>
    );
  }
}

export default Quiz;
