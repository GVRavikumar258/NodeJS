const dns = require('node:dns');

dns.lookup('www.Youtube.com', (err, address, family) => {
    if(err)
    {
        throw err
    }
  console.log('Youtube', address, family);
});