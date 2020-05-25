/////////////////////////////////////////
//             CLOSET PAGE             //
/////////////////////////////////////////



const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const { closet } = this.props
        return (
            <Layout>
                <div id="return">
                    <a href="/closet/enter"><p id="return-home">return</p></a>
                    </div>
                <h1 id="enter-header">the<strong>closet</strong></h1>
                <div id="something-new">
                    <h2 id="add-text">got something new?</h2>
                    <a href="/closet/new" id="add-new-btn">add new item</a>
                </div>
                <nav>
                    {/* <div class="dropdown">
                    <button class="dropbtn">TYPE</button>
                      <div class="dropdown-content">
                        <a href="#">top</a>
                        <a href="#">bottom</a>
                        <a href="#">other</a>
                      </div>
                </div> */}
                    
                </nav>
                <ul class="item-list">
                    {
                        closet.map((clothing, i) => {
                            console.log(clothing._id)
                            return (
                                <a href={`/closet/${clothing._id}`} id="items">
                                <div class="item-card"> 

                                    <img src={clothing.img} id="index-img"/><br/>
                                    <p id="index-brand"><strong>{clothing.brand}</strong></p><br/>
                                    <p id="index-name">{clothing.name}</p>
                                </div>
                                </a>
                            )
                        })
                    }
                </ul>
                
            </Layout>
        )
    }
}

module.exports = Index;