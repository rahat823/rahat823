module.exports.config = {
  name: "autolink",
  version: "1.0.",
  hasPermssion: 0,
  credits: "rahul",
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
  const axios = require('axios');
const fs = require('fs-extra');
let dipto = event.body ? event.body : "একটু সময় অপেক্ষা করো";
  try {
if (dipto.startsWith('https://vt.tiktok.com') ||
dipto.startsWith("https://vm.tiktok.com") ||
dipto.startsWith('https://www.facebook.com') || 
dipto.startsWith('https://fb.watch')||
dipto.startsWith('https://www.instagram.com/')|| dipto.startsWith('https://youtu.be/') || dipto.startsWith('https://youtube.com/')){
  api.sendMessage("ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ, ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...\n\n𝐀𝐩𝐢 𝐁𝐲 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊", event.threadID, event.messageID);
  if (!dipto) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
    }
    let path = __dirname + `/cache/fbVID.mp4`;
    const aa = await axios.get(`https://d1pt0-all.onrender.com/xnxx?url=${encodeURIComponent(dipto)}`);
   const bb = aa.data;
    const vid = (await axios.get(bb.result, { responseType: "arraybuffer", })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    api.sendMessage({
      body: `${bb.cp}`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (dipto.startsWith('https://i.imgur.com')){
  const dipto3 = dipto.substring(dipto.lastIndexOf('.'));
  const response = await axios.get(dipto, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/dipto${dipto3}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (e) {
api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
module.exports.run = function({ api, event, client, __GLOBAL }) {

}