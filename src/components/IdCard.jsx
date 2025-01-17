import "./IdCard.css";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card-container">
      <div className="data-card">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
      </div>
      <div className="picture-card">
        <img src={picture}></img>
      </div>
    </div>
  );
}

export default IdCard;
