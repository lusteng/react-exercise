const 
    express = require('express'),
    ReactSSR = require('react-dom/server'),
    fs = require('fs'),
    path = require('path'),
    serverEntry = require('../dist/server').default;
    console.log(serverEntry)

const 
    app = express(),
    template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8'),
    port = 3333;    

app.use('/public', express.static(path.join(__dirname, '../dist')))    

app.get('*', (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry)
    let sendStr = template.replace('<app></app>', appString) 
    console.log(sendStr)
    res.send(sendStr);
})

app.listen(port, () => {
    console.log(`listen ${port}`)
})