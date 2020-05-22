const React = require('react')

class Edit extends React.Component {
    render() {
        const { clothing } = this.props;
        return (
            <div>
                <h1>edit page</h1>
                <form action={`/closet/edit/${clothing._id}?_method=put`} method="POST">
                    name: <input type="text" name="name" value={fruit.name}/>
                    <br/>
                    brand: <input type="text" name="brand" value={fruit.color}/>
                    <br/>
                    ready to wear?: <input type="checkbox" name="readyToWear" checked={fruit.readyToWear ? 'checked' : ''}/>
                    <br/>
                    <input type ="submit" name="" value="make changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;