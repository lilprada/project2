const React = require('react')
const Layout = require('../Layout.jsx')

class LoginUser extends React.Component {
    render() {
        return (
            <Layout>
                <div id="login">
                <h1 id="login-title">hello again</h1>
                <h2 id="login-text">love your top. is that new?</h2>
                <form action="/sessions" method="POST">
                    <p id="login-prompt">username: <input type="text" name="username"/>
                    <br/>
                    password: <input type="password" name="password"/>
                    </p>
                    <br/>
                    <input type="submit" value="login" id="login-btn"/>
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

module.exports = LoginUser;