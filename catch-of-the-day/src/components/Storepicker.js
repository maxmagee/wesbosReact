import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    /* One way of binding your own methods
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }*/
    
    goToStore(event) {
        event.preventDefault();
        // First grab the text from the box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        // Second we're going to transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

// This 'surfaces' the router from the parent, allowing us to have access to it in this component
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;