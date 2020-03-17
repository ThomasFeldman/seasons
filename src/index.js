 import React from 'react';
 import ReactDOM from 'react-dom';


 class App extends React.Component {
    
    constructor(props) {
        super(props);

        //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
        //TO THIS.STATE
        this.state = { lat: null };
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setstate!!!!
                this.setState({ lat: position.coords.latitude });
            
                //we did not!!!! NEVER DO THIS
                //this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
         );
    }
    
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

 ReactDOM.render(
     <App />,
     document.querySelector('#root')
 )
