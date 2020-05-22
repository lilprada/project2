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
                    {brand}<br/>
                    <img src={img}/>
                    {readyToWear ? `Wear Her!` : `She dirty!`}<br/>
                    <a href={`/closet/edit/${this.props.clothing._id}`}>edit item</a>
                </p>
            </div>
        )
    }
}

module.exports = Show;