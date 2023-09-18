import { task, params } from "@ampt/sdk";

task("vestaboard-clock", async (event) => {
  const VESTABOARD_TOKEN = params("VESTABOARD_TOKEN");
  const timestamp = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;

  await fetch("https://rw.vestaboard.com/", {
    body: JSON.stringify({ text: `It is ${timestamp}` }),
    headers: {
      "Content-Type": "application/json",
      "X-Vestaboard-Read-Write-Key": VESTABOARD_TOKEN,
    },
    method: "POST",
  });
}).every("1 minute");
