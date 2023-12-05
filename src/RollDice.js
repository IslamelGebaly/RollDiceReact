import { Component } from "react";
import Die from "./Die.js"
import "./RollDice.css"

export default class RollDice extends Component {

    static defaultProps = {
        sides : ["one", "two", "three", "four", "five", 'six']
    };

    constructor(){
        super();
        this.state = {
                die1 : "one", 
                die2 : "one",
                rolling : false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            die1 : this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            die2 : this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            rolling : true
        });

        setTimeout(() => {
            this.setState({rolling : false});
        }, 1000);
    }

    render () {
        return (
            <div className = "RollDice">
                <div className = "Dice">
                    <Die face = {this.state.die1} rolling = {this.state.rolling}/>
                    <Die face = {this.state.die2} rolling = {this.state.rolling}/>
                </div>
                <button onClick={this.handleClick} disabled = {this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        );
    }
}
