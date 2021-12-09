import "./Home.css";
import Text from "../common/Text";

function Home() {
  return (
    <div className="home-container" id="home">
      <img
        src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        className="home-image"
        alt= "imagehome"
      ></img>
      <div className="resume-header">
        <Text
          title="Nicolai Resume"
          subtitleitalic="Stay Positive, Work Hard"
        />
      </div>
    </div>
  );
}

export default Home;
