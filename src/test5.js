import https from "node:https";
const q = encodeURIComponent('site:github.com "microsoft fabric" "svg" AND "viewBox"');
https.get("https://html.duckduckgo.com/html/?q=" + q, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const urls = [...data.matchAll(/<a class="result__url" href="([^"]+)">/g)].map(m => m[1]);
    console.log(urls.slice(0, 10));
  });
});
