const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello, this is a test message.',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+14155238886'
    })
    .then(message => console.log(message.sid))
    .done();
