function MyFirstComponent() {
  const message = "Hello World"
  const amount = 43;
  const user = {
    userName: "Alice",
    surname: "Smith",
  }

  const renderSubtitle = () => {
    return <h3>This is a subtitle</h3>
  }
// one way to add css for jsx, there are more
  const bannerStyle = {
    color: "#181818",
    border: "2px solid orange",
    padding: "1rem",
    margin: "1rem",
    background: "#aaa"
  }

  return ( 
    <>
      <h2>This is my first component, {message.toUpperCase()}</h2>
      <h3>Amount: {amount * 2}</h3>
      <p>{user.userName} {user.surname}</p>

      <div id="banner" className="bg" style={bannerStyle}>
        This is a banner
      </div>

      {/* invoking a function that returns jsx */}
      {renderSubtitle()}
    </>
  )
}

export default MyFirstComponent;