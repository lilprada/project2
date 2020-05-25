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
                <h1 id="enter-header">the<strong>closet</strong></h1>
                <nav>
                    <a href="/closet/enter"><p id="return-home">return</p></a>
                    <h2 id="add-text">got something new?</h2>
                    <a href="/closet/new"><p id="add-new-btn">add new item</p></a>
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