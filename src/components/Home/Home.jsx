import React from "react";

class Home extends React.Component {
    state = {
        name: "",
    };
    componentWillUnmount = () => {
        console.log("Home component ummonted");
    };

    componentDidMount = () => {
        console.log("Home component did mount");
        this.setState({
            name: "Change",
        });
    };

    componentDidUpdate = () => {
        console.log("Home component did update");
    };

    render = () => {
        console.log("Home component render");
        return <div>This is Home Page</div>;
    };
}

export default Home;
