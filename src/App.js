import React,{Component} from 'react';
//import 'ANY NAME' from './[folder/file]'; //import all component js files to App, no ext required
//import [image] from './.jpg';
import './CSS/App.css';
import Footer from './Footer';

class App extends Component
{
    state = {} //include all var/obj with comma, mention with this.state.[name]
    Handler = ()=>
    {
        this.setState({}) //only way to change var/obj inside, mention one to replace & rest is kept intact
    }
    render()
    {
        return(
            <div className="App">
                <Footer />
            </div>
        );
    }
}

export default App;