require('dotenv').config(); // Load environment variables from .env file
const fs = require('fs');
const path = require('path');
const { color } = require('./nothing-ben/myfunc');

//OWNER OFF BOT
global.owner = '+93744215959'
//OWNER OFF BOT NUMBER
global.nomerowner = ["+93744215959"]
//CHANNEL JID
global.channelChatId = "0029Vasu3qP9RZAUkVkvSv32";
//WATERMARK BOT NAME AND STICKER
global.packname = process.env.OWNER;
global.author = '𝑩𝑬𝑵_𝑩𝑶𝑻'
//SOON
global.apilinode = '' // apikey vps account linode
global.apitokendo = ''
//SOON 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url
//SOON
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}
//RPG LIMIT
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//AUTO FUNCTIONER DONT CHANGE IT
global.antilink = false; //Global Auto Antilink
global.antilinkremove = false; //Global Auto Antilink Remove
global.antilinkwarn = false; //Global Auto Antilink warnings
global.antibot = false; //Global Auto Antibot
global.autoTyping = false; //Global auto typing
global.autoRecord = false; //Global auto recording
global.autoViewStatus = false; //Global Auto Statusview
global.autoStatusDownload = false; //Global Auto status download
global.autoviewreactstatus = true; //Global Auto Status react
global.autobio = false; //Global Auto bio
global.welcome = false; //Global Auto welcome in Group
global.unavailable = false; //Global Auto unavailable
global.available = false; //Global Auto available
global.autoreadmessages = false; //Global Auto Read
global.chatbot = false; //Global Auto chatbot
global.autoreact = false; //Global Auto react message
global.prefix = '.'; //Global Auto prefix
global.commands = "1000+"; //Global All commands
global.version = "V1"; //Global Auto version bot

//DONT CHANGE IT IS API KEY
global.api = {
    screenshotapi: 'd539a7b1cd55ebccba702c2a0f96eff9',
    fgmods: 'm2XBbNvz',
    screenshotapiv2: '054b4800d6664f8fb79e63e419b3c834',
    removebg: '829301093',
};

// Get the SESSION_ID value from .env file
const sessionId = process.env.SESSION_ID;

if (sessionId === undefined) {
  console.log('The SESSION_ID variable is missing in .env!');
  return;
}

if (sessionId.trim() === '') {
  console.log('Your session id is empty, let\'s go');
}

// Paths for session folder and creds.json file
const sessionFolder = path.join(__dirname, 'session');
const credsFilePath = path.join(sessionFolder, 'creds.json');

// Create session folder if it doesn't exist
if (!fs.existsSync(sessionFolder)) {
  fs.mkdirSync(sessionFolder);
  console.log("The 'session' folder has been created.");
}

// Define an async function for handling file operations
async function handleFileOperations() {
  // If creds.json exists, read it
  let credsData = {};
  if (fs.existsSync(credsFilePath)) {
    const fileContent = await fs.promises.readFile(credsFilePath, 'utf-8');
    credsData = JSON.parse(fileContent);
  }

  // Add the SESSION_ID to the data
  credsData.SESSION_ID = sessionId;

  // Write the data to creds.json
  await fs.promises.writeFile(credsFilePath, JSON.stringify(credsData, null, 2));
  console.log("The SESSION_ID has been saved in creds.json.");
}

// Call the async function
handleFileOperations();

//—————「 DEADLINE 」—————//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});