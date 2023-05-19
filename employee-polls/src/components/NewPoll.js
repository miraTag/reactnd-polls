import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions_actions";

const mapStateToProps = (state) => ({
  user: state.user,
});

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    setFirstOption(e.target.value);
  };

  const handleSecondOptionChange = (e) => {
    setSecondOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div className="text-center p-5">
      <h1 className="p-5 font-bold mt-9">New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <label htmlFor="firstOption" className="block text-sm font-medium text-slate-700">
            First Option
          </label>
          <div className="mt-1">
            <input
              value={firstOption}
              onChange={handleFirstOptionChange}
              type="text"
              name="firstOption"
              id="firstOption"
              className="px-3 py-2"
              data-testid="firstOption"
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="secondOption" className="m-4">
            Second Option
          </label>
          <div className="mt-1">
            <input
              value={secondOption}
              onChange={handleSecondOptionChange}
              type="text"
              name="secondOption"
              id="secondOption"
              className="px-3 py-2"
              data-testid="secondOption"
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button type="submit" className="mt-5 btn btn-outline-primary" data-testid="submit-poll">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(NewPoll);