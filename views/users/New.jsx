const React = require('react')
const Layout = require('../Layout.jsx')

class NewUser extends React.Component {
    render() {
        return (
            <Layout>
                <div id="new-user">
                <h1 id="new-user-title">welcome</h1>
                <h2 id="create-acct">create an account with us</h2>
                <form action="/user" method="POST">

                    <p id="new-acct-text">username: <input type="text" name="username"/>
                    <br/>
                    password: <input type="text" name="password"/></p>
                    <br/>
                    <input type="submit" value="create user" id="submit-new-btn"/>
                    </form>
                    </div>
                    <div id="return">
                    <a href="/">
                    <p id="return-home">return</p></a>
                    </div>
                
            </Layout>
        )
    }
}

module.exports = NewUser;