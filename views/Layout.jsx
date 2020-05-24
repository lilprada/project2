const React = require('react')

const Layout = (props) => {
    return (
        <html>
            <head>
            <link rel="stylesheet" href="/style.css"/>
                <title>closet closet </title>
            </head>
            <body>
                <h1>{props.title}</h1>
                <main>
                    {props.children}
                </main>

            </body>
        </html>
    )
}

module.exports = Layout;