const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>new clothing item</h1>
              <form action="/closet" method="POST">
                  name: <input type="text" name="name" /><br/>
                  brand: <input type="text" name="brand" /><br/>
                  image: <input type="text" name="img" /><br/>
                  <div>
                    <input type="submit" value="Create item"/>
                </div>
               </form>
          </div>);
    }
  }
  
  module.exports = New;