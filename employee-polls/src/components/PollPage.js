import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions_actions";
import "./PollPage.css";
const PollPage = ({ dispatch, authUser, question, author }) => {
  const navigate = useNavigate();
  if (!authUser || !question || !author) {
    return <Navigate to="/404" />;
  }
  const hasVotedForOptionOne = question.optionOne.votes.includes(authUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;
  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };
  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };
  const calcPercentage = (option, question) => {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return (
          (question.optionOne.votes.length / numberVotesTotal) * 100 + " %"
        );
      case "optionTwo":
        return (
          (question.optionTwo.votes.length / numberVotesTotal) * 100 + " %"
        );
      default:
        return "";
    }
  };
  return (
    <div className="py-5 container text-center ">
      <div className="row py-5">
        <h2>
          Poll by <span style={{ fontWeight: "bold" }}>{author.id}</span>
        </h2>
      </div>
      <img src={author.avatarURL} alt="Profile" className="profile-pic my-4" />
      <h2 className="py-3">Would you rather?</h2>
      <div className="d-flex justify-content-center py-4 ">
        <button
          onClick={handleOptionOne}
          disabled={hasVoted}
          className="mx-4 rounded py-2 w-50"
          style={{
            backgroundColor: `${hasVotedForOptionOne ? "green" : ""}`,
            color: `${hasVotedForOptionOne ? "white" : ""}`,
          }}
        >
          <div className="">
            <p className="my-4">{question.optionOne.text}</p>
            {!hasVoted && <p className="btn btn-secondary rounded w-50">Click</p>}
            {hasVoted && (
              <p>
                Votes: {question.optionOne.votes.length} (
                {calcPercentage("optionOne", question)})
              </p>
            )}
          </div>
        </button>
        <button
          onClick={handleOptionTwo}
          disabled={hasVoted}
          className="mx-4 rounded py-2 w-50"
          style={{
            backgroundColor: `${hasVotedForOptionTwo ? "purple" : ""}`,
            color: `${hasVotedForOptionTwo ? "white" : ""}`,
          }}
        >
          <p className="my-4">{question.optionTwo.text}</p>
          {!hasVoted && <p className="btn btn-secondary rounded w-50">Click</p>}
          {hasVoted && (
            <p>
              Votes: {question.optionTwo.votes.length} (
              {calcPercentage("optionTwo", question)})
            </p>
          )}
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ authUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authUser, question, author };
  } catch (e) {
    return <Navigate to="/404" />;
  }
};
export default connect(mapStateToProps)(PollPage);
