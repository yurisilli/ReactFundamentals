import "./Counter.css";
import React from "react";
import Display from "./Display";
import Step from "./Step";
import Buttons from "./Buttons";

class Counter extends React.Component {
    state = {
        number: this.props.initialNumber || 0,
        steps: this.props.initialSteps || 1,
    };

    increment = () => {
        this.setState({ number: this.state.number + this.state.steps });
    };

    decrement = () => {
        this.setState({ number: this.state.number - this.state.steps });
    };

    setSteps = (newSteps) => {
        this.setState({ steps: newSteps });
    };

    render() {
        return (
            <div className="CounterContainer">
                <Display number={this.state.number} />
                <Step steps={this.state.steps} setSteps={this.setSteps} />
                <Buttons
                    increment={this.increment}
                    decrement={this.decrement}
                />
            </div>
        );
    }
}

export default Counter;
