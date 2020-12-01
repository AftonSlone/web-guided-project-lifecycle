import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogPics:[],
        input: "husky"
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then((resp)=> {
                console.log(resp);
                this.setState({
                    dogPics: resp.data.message
                });
            })
            .catch(err=> console.log(err));
    }

    onChange = (e) => {
        this.setState({
            input:e.target.value
        });
    } 

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
        
        //run api call on this.state.input

        this.setState({
            input:""
        });
    }

    render() {
        return(<div>
            <h1>See some Dogs!</h1>

            <form onSubmit={this.onSubmit}>
                <label>
                    Search for a breed:
                    <input 
                        value={this.state.input}
                        placeholder='enter a breed'
                        onChange={this.onChange}
                    />
                </label>
                <button>Search</button>
            </form>

            <div>
                {
                    this.state.dogPics.map(dogPic => (
                          <img width="200" src={dogPic} alt={dogPic} key={dogPic} />
                    ))
                }
            </div>
        </div>)
    }
}

export default App;