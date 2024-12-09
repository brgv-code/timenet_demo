const express = require("express");
const app = express()
const port = 3000;

app.use((req,res, next) => {
    const host = req.get('host');
    const subdomain = host.split('.')[0];

    if(host.includes('bhargav.dev')) {
        console.log(`Requested subdomain: ${subdomain}`);

        switch(subdomain) {
            case 'www':
                res.send('welcome to the main website!');
                break;

            case 'blog':
                console.log('THis is the blog subdomain');
                break;
            case 'admin':
                res.send('Admin subdomain access');
                break;
            default: 
            res.send(`You accessed a wildcard subdomain: ${subdomain}.bhargav.dev`)
        }
    } else {
        next();

    }
});

app.get('/', (req,res) => {
    res.send('Main domain handler');
});

app.listen(port, () => {
    console.log(`Wildcard subdomain server at http://localhost:${port}`)
})