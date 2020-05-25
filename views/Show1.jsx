//////////////////////////////////
//    CLOSET vs LAUNDRY PAGE    //
//////////////////////////////////

const React = require('react');
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        const logout = 
        (<form action="/sessions/?_method=delete" method="post">
        <input type="submit" value="logout"/>
        </form>)
        
        
        return (
            <Layout>
                <body>
                <h1 id="enter-header">the<strong>closet</strong></h1><br/>&nbsp;
                <div id="logout-btn">
                {this.props.username ? logout : ""}
                </div>
            <div class="nav-background">
                <div class="closet-background">
                <h2><a href="/closet" id="closet-option">closet</a></h2>
                </div>
                <br/>
                <div class="laundry-background">
                <h2><a href="/closet/laundry" id="laundry-option">laundry</a></h2>
                </div>
            </div> 
            </body> 
            </Layout>
        )
    }
}

module.exports = Show;