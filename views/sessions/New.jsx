const React = require('react')

class LoginUser extends React.Component {
    render() {
        return (
            <div>
                <h1>LOG IN PAGE</h1>
                <form action="/sessions" method="POST">
                    username: <input type="text" name="username"/>
                    <br/>
                    password: <input type="password" name="password"/>
                    <br/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}

module.exports = LoginUser;