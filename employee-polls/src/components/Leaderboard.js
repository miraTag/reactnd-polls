import { connect } from "react-redux";
const Leaderboard = ({ users }) => {
  const tableHeader = ["Usre", "Answered", "Created"];
  return (
    <div>
      <table className="table">
        <thead className="table-header-group">
          <tr className="table-row">
            {tableHeader.map((header) => (
              <th className="table-cell">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className=" ">
                {user.name}
                <br />
                <span style={{ fontWeight: "bold" }}>{user.id}</span>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});
export default connect(mapStateToProps)(Leaderboard);
