const React = require('react')
const Layout = require('./Layout.jsx')

class Edit extends React.Component {
    render() {
        const { clothing } = this.props;
        return (
            <Layout>
                <h1 id="enter-header">the<strong>closet</strong></h1>
                <a href="/closet/enter"><p id="return-home">return</p></a>
                <h2 id="edit-item">edit this item</h2>
                <p id="reminder">if dirty, uncheck RTW to send to laundry<br/>
                if clean, check RTW to send to closet</p>
            <div class="edit-form">
                <form action={`/closet/edit/${clothing._id}?_method=put`} method="POST">
                    brand: <input type="text" name="brand" value={clothing.brand}/>
                    <br/>
                    name: <input type="text" name="name" value={clothing.name}/>
                    <br/>
                    image: <input type="text" name="img" value={clothing.img}/><br/>
                    top: <input type="checkbox" name="top"/>
                    bottom: <input type="checkbox" name="bottom"/>
                    other: <input type="checkbox" name="other"/><br/>
                    ready to wear?: <input type="checkbox" name="readyToWear" checked={clothing.readyToWear ? '' : 'checked'}/>
                    <br/>
                    <input type ="submit" value="make changes" id="update-btn"/>
                </form>
                &nbsp;
                <form 
                    action={`/closet/${clothing._id}?_method=DELETE`} method="post">
                    <input type="submit" value="delete" id="delete-btn"></input>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = Edit;