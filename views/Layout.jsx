const React = require('react')

const Layout = (props) => {
    return (
        <html>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css" integrity="sha256-7LuOHbsBImoaCHWzjqQDLeGK9kq/rZZqIr6Gtkz0WzI=" crossorigin="anonymous" />
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