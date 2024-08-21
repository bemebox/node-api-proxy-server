const express = require('express')

const router = express.Router()

router.get('/health', (req, res) => {

    res.status(200).json({ success: true, message: 'Success' })
});

// define the reusable error handling function
function handleAxiosError(res, action, error) {

    if (error.response) {
        const statusCode = error.response.status;
        console.error(`${action} error status code:`, statusCode);
        console.error(`${action} error response data:`, error.response.data);
        console.error(`${action} error response headers:`, error.response.headers);
        return res.status(statusCode).json({ success: false, message: `${action} error.` });
    } else if (error.request) {
        console.error(`${action} request error: No response received.`, error.request);
        return res.status(408).json({ success: false, message: `${action} request timeout. No response received.` });
    } else {
        console.error(`${action} internal error:`, error.message);
        return res.status(500).json({ success: false, message: `${action} Internal Server Error.` });
    }
}

module.exports = router