import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogPic:[]
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/husky/images')
            .then((resp)=> {
                console.log(resp);
            })
    }

    render() {
        return(<div>
            <h1>See some Dogs!</h1>
            <div>

            </div>
        </div>)
    }
}

export default App;