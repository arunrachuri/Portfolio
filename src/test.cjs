const https = require('https');
https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg', (res) => {
  console.log('microsoft', res.statusCode);
});
https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoftfabric.svg', (res) => {
  console.log('microsoftfabric', res.statusCode);
});
