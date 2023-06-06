import React from 'react';

class MyClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
        if (prevState.count !== this.state.count) {
            console.log('Count has changed');
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <h1>My Component</h1>
                    <p>Count: {this.state.count}</p>
                    <button onClick={() => this.handleClick()}>Increment</button>
                </div>
            </div>
        );
    }
};

export default MyClassComponent;