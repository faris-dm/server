const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiId = 32694575;
const apiHash = "9ef0ca8f44c3ed98990962b447d92236";
const session = new StringSession("");

(async () => {
  const client = new TelegramClient(session, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Number (+...): "),
    phoneCode: async () => await input.text("Code: "),
    onError: (err) => console.log(err),
  });

  console.log("✅ Connected!");

  // We set a high limit to find as many old accounts as possible
  const myDialogs = await client.getDialogs({ limit: 1000 });

  console.log("\n--- YOUR CHAT HISTORY ---");

  myDialogs.forEach((dialog) => {
    // 1. Get the 'entity' (the user or group details)
    const entity = dialog.entity;

    // 2. Extract the username if it exists
    const username = entity.username ? `@${entity.username}` : "No Username";

    // 3. Check if the account is deleted
    const isDeleted = entity.deleted ? "[DELETED ACCOUNT]" : "";

    console.log(`Name: ${dialog.title} | Username: ${username} ${isDeleted}`);
  });
})();
