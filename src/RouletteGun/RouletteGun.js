import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
    };
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    //function to handle clicks
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeOut = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }
    //function that tells the render() function what to render
    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!'
        } else {
            return 'you\'re safe...for now!'
        }
    }
    //function to render display
    render() {
        return (
            <div>
                <p>Pull the trigger if you dare</p>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;