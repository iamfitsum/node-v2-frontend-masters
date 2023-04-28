import { readFile } from "fs/promises";

try {
  const result = await readFile(new URL("app.mj", import.meta.url), "utf-8");
} catch (err) {
  console.error(err);
  console.log("There was an error but I didn't crash!")
}