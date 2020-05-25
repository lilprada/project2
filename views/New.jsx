const React = require('react');
const Layout = require('./Layout.jsx')

class New extends React.Component {
    render() {
      return (
          <Layout>
            <div id="return">
              <a href="/closet/enter"><p id="return-home">return</p></a>
            </div>
            <div id="new-item-info">
              <h1 id="enter-header">the<strong>closet</strong></h1>
              <h2 id="new-piece-text">got a new piece?</h2>
              <h3 id="create-new-title">add it to your inventory</h3>
            
              <div id="new-form">
                <form action="/closet" method="POST">
                  brand: <input type="text" name="brand" /><br/>
                  name:  <input type="text" name="name" /><br/>
                  image: <input type="text" name="img" placeholder="       insert URL here"/><br/>
                  
                  top: <input type="checkbox" name="top"/>
                  bottom: <input type="checkbox" name="bottom"/>
                  other: <input type="checkbox" name="other"/><br/>
                  ready to wear?: <input type="checkbox" name="readyToWear"/>
                  
                  <input type="submit" value="Create item" id="create-btn"/>
                  </form>
                </div>
            </div>
          </Layout>);
    }
  }
  
  module.exports = New;