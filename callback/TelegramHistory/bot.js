const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const apiId = 32694575;
const apiHash = "9ef0ca8f44c3ed98990962b447d92236";
const botToken = "PASTE_YOUR_BOT_TOKEN_HERE";

const session = new StringSession("");

(async () => {
  const client = new TelegramClient(session, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({ botAuthToken: botToken });

  console.log("🤖 Bot is running...");

  // We use a simple object to keep track of who is in "Honor Mode"
  const userStates = {};

  client.addEventHandler(async (event) => {
    const message = event.message;
    if (!message || !message.text) return;

    const text = message.text.toLowerCase();
    const chatId = message.chatId.toString();

    // 1. Logic for "Life"
    if (text === "/life" || text === "life") {
      await client.sendMessage(chatId, {
        message:
          "I will tell you about life: It is a beautiful journey of growth.",
      });
    }

    // 2. Logic for "Reality"
    else if (text === "/reality" || text === "reality") {
      await client.sendMessage(chatId, {
        message:
          "I will tell you about the reality of you: You are a creator of your own world.",
      });
    }

    // 3. Logic for "Honor" (User types anything and bot sends it back)
    else if (text === "/honor" || text === "honor") {
      await client.sendMessage(chatId, {
        message:
          "Honor Mode: Type anything now and I will send it back to you!",
      });
      userStates[chatId] = "waiting_for_honor"; // Set state
    }

    // 4. Handle the "waiting" state for Honor
    else if (userStates[chatId] === "waiting_for_honor") {
      await client.sendMessage(chatId, {
        message: `You sent: ${message.text}`,
      });
      delete userStates[chatId]; // Reset state after sending
    }
  });
})();
