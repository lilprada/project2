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
                <h1 id="enter-header">the<strong>laundry</strong></h1>
                <nav>
                    <p><a href="/closet/enter">go back</a></p>
                    <h1> add item</h1>

                    <form 
                    action="/closet/new" method="post">
                        <input type="text" name="name"/>
                        <div>
                    <input type="submit" value="Create item"/>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">TYPE</button>
                      <div class="dropdown-content">
                        <a href="#">top</a>
                        <a href="#">bottom</a>
                        <a href="#">other</a>
                      </div>
                </div>
                    </form>
                </nav>
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