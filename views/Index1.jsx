/////////////////////////////////////////
//            LAUNDRY PAGE             //
/////////////////////////////////////////



const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const { laundry } = this.props
        return (
            <Layout>
                <div id="return">
                    <a href="/closet/enter"><p id="return-home">return</p></a>
                    </div>
                <h1 id="enter-header">the<strong>laundry</strong></h1>

                <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="logout" id="logout-btn"/>
                </form>
                
                <div id="something-new">
                    <h2 id="add-text">got something new?</h2>
                    <a href="/closet/new1" id="add-new-btn">add new item</a>
                </div>
                {/* <nav>
                    <div class="dropdown">
                    <button class="dropbtn">filter</button>
                      <div class="dropdown-content">
                        <a href="#">tops</a>
                        <a href="#">bottoms</a>
                        <a href="#">other</a>
                      </div>
                </div>
                    
                </nav> */}
                <ul class="item-list">
                    {
                        laundry.map((laundry, i) => {
                            console.log(laundry._id)
                            return (
                                <a href={`/closet/${laundry._id}`} id="items">
                                <div class="item-card"> 

                                    <img src={laundry.img} id="index-img"/><br/>
                                    <p id="index-brand"><strong>{laundry.brand}</strong></p><br/>
                                    <p id="index-name">{laundry.name}</p>
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