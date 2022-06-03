const express = require('express');

const router = express.Router();
const qr = require('qrcode');

router.post('/scan', (req, res) => {
    const url = req.body.url

    if(!url || url.length === 0)  return res.send('Empty data')

    qr.toDataURL(url, (err, src) => {
        if(err) return res.send(err)
        
        return res.send({ src })
    })
})

module.exports = router