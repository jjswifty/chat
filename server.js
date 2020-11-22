const app = require('express')(),
    config = require('config'),
    PORT = config.get('port') || 5000,
    mongoose = require('mongoose');

app.use(express.json({ extended: true }))

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => console.log(`Server is started on ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()