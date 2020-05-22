const userSchema = new Schema ({
    username: {type: String, unique: true, required: true},
    password: String
})

const User = model('User', userSchema)

module.exports = User;