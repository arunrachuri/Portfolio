import https from "node:https";
const q = encodeURIComponent('site:github.com "microsoft fabric" "svg" AND "viewBox"');
https.get("https://html.duckduckgo.com/html/?q=" + q, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 1000));
  });
});
