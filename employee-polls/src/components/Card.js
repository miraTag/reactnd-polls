import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question }) => {
  return (
    <Link to={"questions/" + question.id} style={{ textDecoration: "none" }}>
      <div className="card p-5 text-center">
        <div className="card-body">
          <h5 className="card-title mb-3">{question.author}</h5>
          <p className="card-subtitle mb-3 text-muted">
            {new Date(question.timestamp).toDateString()}
          </p>
          <button className="btn btn-secondary w-100">Show</button>
        </div>
      </div>
    </Link>
  );
};

export default connect()(Card);
