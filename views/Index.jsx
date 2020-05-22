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
                <h1>the closet</h1>
                <nav>
                    <p><a href="/enter">go back</a></p>
                    <h1> add item</h1>
                    <a href="/closet/new">new purchase</a>
                    
                </nav>
                <ul>
                    {
                        closet.map((clothing, i) => {
                            console.log(clothing._id)
                            return (
                                <li> 
                                    {clothing.name}<br/>
                                    {clothing.brand}<br/>
                                    <a href={`/closet/${clothing._id}`}><img src={clothing.img}/></a>
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