import https from "node:https";

const req = https.get("https://raw.githubusercontent.com/microsoft/fabric-samples/main/assets/fabric-logo.svg", (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    if(res.statusCode === 200) {
       console.log(data);
    }
  });
}).on("error", (e) => {
  console.error(e);
});
