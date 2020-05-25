////////////////////////////////////////
//            LAUNDRY PAGE            //
////////////////////////////////////////



const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const { closet } = this.props;
        return (
            <Layout>
               <div id="return">
                    <a href="/closet/enter"><p id="return-home">return</p></a>
                    </div>
                <h1 id="enter-header">the<strong>laundry</strong></h1>
                <div id="something-new">
                    <h2 id="add-text">got something new?</h2>
                    <a href="/closet/new" id="add-new-btn">add new item</a>
                </div>
                {/* <div class="dropdown">
                    <button class="dropbtn">TYPE</button>
                      <div class="dropdown-content">
                        <a href="#">top</a>
                        <a href="#">bottom</a>
                        <a href="#">other</a>
                      </div>
                </div> */}
                    
                
                <ul>
                    {
                        closet.map((clothing, i) => {
                            console.log(clothing._id)
                            return (
                                <li> 
                                    {clothing.name}<br/>
                                    {clothing.brand}<br/>
                                    {clothing.img}
                                </li>
                            )
                        })
                    }
                </ul>
                
            </Layout>
        )
    }
}

module.exports = Index;