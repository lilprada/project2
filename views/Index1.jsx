////////////////////////////////////////
//            LAUNDRY PAGE            //
////////////////////////////////////////



const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const { clothes } = this.props
        return (
            <Layout>
                <h1>laundry room</h1>
                <nav>
                    <p><a href="/closet/enter">go back</a></p>
                    <h1> add item</h1>
                    <form 
                    action="/closet/new" method="post">
                        <input type="text" name="name"/>
                        <div>
                    <input type="submit" value="Create item"/>
                </div>
                    </form>
                </nav>
                {/* <ul>
                    {
                        clothes.map((clothing, i) => {
                            console.log(clothing._id)
                            return (
                                <li> 
                                    {clothing.name}<br/>
                                    {clothing.brand}<br/>
                                    {clothing.image}
                                </li>
                            )
                        })
                    }
                </ul> */}
                
            </Layout>
        )
    }
}

module.exports = Index;