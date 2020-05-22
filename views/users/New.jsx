const React = require('react')

class NewUser extends React.Component {
    render() {
        return (
            <div>
                <h1>New user</h1>
                <form action="/user" method="POST">
                    username: <input type="text" name="username"/>
                    <br/>
                    password: <input type="text" name="password"/>
                    <br/>
                    <input type="submit" value="create user"/>
                </form>
            </div>
        )
    }
}

module.exports = NewUser;