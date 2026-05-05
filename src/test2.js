import https from "node:https";

https.get("https://upload.wikimedia.org/wikipedia/commons/e/e0/Microsoft_Fabric_logo.svg", (res) => {
  console.log("Status:", res.statusCode);
  process.exit(0);
}).on("error", (e) => {
  console.error(e);
  process.exit(1);
});
