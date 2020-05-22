////////////////////////////////////////////
//            ITEM DISPLAY PAGE           //
////////////////////////////////////////////



const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, brand, img, readyToWear } = this.props.clothing;
        return (
            <div>
                <h1>item</h1>
                <p>
                    {name}<br/>
                    {brand}
                    {img}
                    {readyToWear}
                </p>
            </div>
        )
    }
}

module.exports = Show;