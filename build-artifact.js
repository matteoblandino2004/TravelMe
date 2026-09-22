/* Produces dist/artifact.html: the same page, minus the document wrapper.
   The Claude Artifact viewer supplies its own doctype, head and body. */
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const out = src
  .replace(/<!doctype html>\s*/i, "")
  .replace(/<\/?html[^>]*>\s*/gi, "")
  .replace(/<\/?head>\s*/gi, "")
  .replace(/<\/?body>\s*/gi, "")
  .replace(/<meta\s+charset[^>]*>\s*/i, "")
  .replace(/<meta\s+name="viewport"[^>]*>\s*/i, "")
  .trim() + "\n";

fs.mkdirSync(path.join(__dirname, "dist"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "dist/artifact.html"), out);
console.log("dist/artifact.html", out.length, "bytes");
