import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        // getInitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        // update our state
        const fishes = {...this.state.fishes};  // Take a copy of our existing state
        
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // set state
        this.setState({ fishes: fishes });  // Tell React that this piece of the state has updated
                                            // this.setState({ fishes });  is a short-hand way of writing the above line        
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;