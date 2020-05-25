////////////////////////////////////////////
//            ITEM DISPLAY PAGE           //
////////////////////////////////////////////



const React = require('react')
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, brand, img, readyToWear } = this.props.clothing;
        return (
            <Layout>
                <h1 id="enter-header">the<strong>closet</strong></h1>
                <a href="/closet/enter"><p id="return-home">return</p></a>
                
                    <img src={img} id="show-img"/>
                <div class="show-page">
                    <p id="show-brand">{brand}</p>
                    <p id="show-name">{name}</p><br/>
                    
                    {/* <p id="show-rtw">{readyToWear ? `no no laundry` : `good to go`}</p><br/> */}
                    <a href={`/closet/edit/${this.props.clothing._id}`}>
                    <p id="show-edit-btn">edit item</p></a>
                    {/* create button to JUST mark as worn and move to Laundry index, if not marked rtw, have it show diff text to move it to Closet? */}
                </div>
            </Layout>
        )
    }
}

module.exports = Show;