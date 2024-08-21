const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

//enable cors
app.use(cors())

app.use('/api/v1/', require('./routes/routes.js'))

// catch-all route for non-existent endpoints
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'Requested endpoint does not exist' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
