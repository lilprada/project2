const React = require('react')

class Edit extends React.Component {
    render() {
        const { clothing } = this.props;
        return (
            <div>
                <h1>edit page</h1>
                <form action={`/closet/edit/${clothing._id}?_method=put`} method="POST">
                    name: <input type="text" name="name" value={clothing.name}/>
                    <br/>
                    brand: <input type="text" name="brand" value={clothing.brand}/>
                    <br/>
                    ready to wear?: <input type="checkbox" name="readyToWear" checked={clothing.readyToWear ? 'checked' : ''}/>
                    <br/>
                    <input type ="submit" value="make changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;