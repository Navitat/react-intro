import Header from "./components/Header.jsx";
import MyFirstComponent from "./components/MyFirstComponent.jsx";
import Footer from "./components/Footer.jsx";
import User from "./components/User.jsx";
import MovieList from "./components/MovieList.jsx";

function App() {
  return (
    <>
      <Header title="Good morning" />
      <User firstName="Alice" surname="Smith" />
      <User firstName="Bob" surname="Brown" />
      <User firstName="Charlie" surname="Doe" />
      <MovieList />
      <MyFirstComponent />
      <Footer>
        <p>Hello world</p>
      </Footer>
    </>
  );
}

export default App;
