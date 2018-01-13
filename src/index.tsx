import * as React from "react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component<{}, {}> {
    render(){
        return (
            <div>
                hello world!
            </div>
        )
    }
}

render(<App/>, document.getElementById("app"));