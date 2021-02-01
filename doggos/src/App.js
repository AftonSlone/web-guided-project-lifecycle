import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    dogs: [],
    dogType: "",
  };

  componentDidMount() {
    this.fetchDogs("bulldog");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dogType == "chihuahua") {
      this.fetchDogs("husky");
    }
  }

  fetchDogs = (breed) => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => {
        this.setState({
          dogs: res.data.message,
        });
      })
      .catch((err) => {
        debugger;
      });
  };

  onChange = (e) => {
    this.setState({
      dogType: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.fetchDogs(this.state.dogType);
    this.setState({
      dogType: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Search Dooooogs</h1>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.dogType}
            type="text"
            onChange={this.onChange}
          />
          <button>Fetch Dogs</button>
        </form>
        <div className="dogContainer">
          {this.state.dogs.map((link) => (
            <img width="200" key={link} src={link} alt={link} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
