function User(props) {
  return (
    <div className="box">
      <p>Name: {props.firstName}</p>
      <p>Surname: {props.surname}</p>
    </div>
  );
}

export default User;
