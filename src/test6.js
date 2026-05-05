import https from "node:https";
https.get("https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/fabric_48x1.svg", (res) => {
  console.log("Status:", res.statusCode);
});
