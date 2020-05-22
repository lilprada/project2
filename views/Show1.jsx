////////////////////////////////////////
//             ENTER PAGE             //
////////////////////////////////////////



const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        
        return (
            <div>
                <h1 id="enter_header">clothing clothing</h1><br/>

                <h2><a href="/closet" id="entry-option">closet</a></h2>
                <br/>
                <h2><a href="/laundry" id="entry-option">laundry</a></h2>
                
            </div>
        )
    }
}

module.exports = Show;