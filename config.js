/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.owner = process.env.OWNER_NUMBER || "263788533181"; // owner number 
global.sudo = process.env.SUDO  || " ";
global.ownername = process.env.OWNER_NAME || "TCRONEB HACKX"; //set bot owner name here 
global.botname = process.env.BOT_NAME || "XMD PLUS";
global.author = process.env.AUTHOR  || "TCRONEB HACKX";
global.packname = process.env.PACK_NAME  || "XMD PLUS ²⁵";
global.thumb = process.env.THUMB_IMAGE || 'https://i.ibb.co/HTrS1HYv/beee.jpg';
global.footer = process.env.FOOTER || '🤖 © wa bot';
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || "Arch_afec5811b1a6ee9688f1f6117b5565a8";
global.simbol = process.env.SYMBOL || '♘';
global.menutype = process.env.MENU_TYPE  || "v2";
global.warn = process.env.WARN || "3";
global.goodbye = process.env.GOODBYE === 'true';
global.welcome = process.env.WELCOME === 'true';
global.timezone = process.env.TIME_ZONE || "Africa/Zimbabwe";
global.startup = process.env.START_MSG === 'true';
global.scan = 'https://arch-session.onrender.com';
global.api = '';


//======= Don't touch =======\\
global.msg = {
    succes: '_Success_',
    owner: '_This feature could be used by owner only_',
	admin: '_This feature could be used by group admin only_',
	botAdmin: '_This feature could be used when the bot is an admin only_',
    group: '_Features Used Only For Groups!_',
    private: '_Features Used Only For Private Chat!_',
    bot: '_This feature could be used by bot only_',
    wait: '_processing.._',
    ban: '_Sorry you have been banned from using command contact owner to unban_'
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
