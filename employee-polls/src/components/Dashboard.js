import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ authUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authUser.id) &&
    !question.optionTwo.votes.includes(authUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authUser.id) ||
    question.optionTwo.votes.includes(authUser.id);

  return (
    <div className="py-5 container">
      <div className="row text-center" data-testid="new-question">
        <h5>New Questions</h5>
      </div>
      <div className="album">
        <div className="p-5 text-center container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-between">
            {questions.filter(unanswered).map((question) => (
              <div className="col">
                <Card question={question} author={users[question.author]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row text-center">
        <h5>Done</h5>
      </div>

      <div className="album">
        <div className="p-5 text-center container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-between">
            {questions.filter(answered).map((question) => (
              <div className="col">
                <Card question={question} author={users[question.author]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, questions, users }) => ({
  authUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
