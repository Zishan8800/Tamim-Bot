const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝐉𝐈𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 ";
		const ownAge = "『 19+ 』";
		const messenger = "https://m.me/𝐓𝐞𝐫𝐚.𝐛𝐚𝐩.𝐜4𝐱";
		const authorFB = "https://www.facebook.com/69𝐊";
		const authorNumber = "_01731736377";
		const Status = "𝐒𝐈𝐍𝐆𝐋𝐄:).♡";
		const urls = [
"https://i.imgur.com/nocvHfz.mp4",
"https://i.imgur.com/KpGhdBY.mp4",
"https://i.imgur.com/2Xa2RTl.mp4",
"https://i.imgur.com/OxL7p9K.mp4"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `ღ《 𝐁𝐎𝐓 𝐀𝐍𝐃 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝AGE  : ${ownAge}
\💕RELATIONSHIP: ${Status}
\🌐WP : ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓DATE : ${date}
\⏰NOW TIME : ${time}
\🔰ANY HELP CONTACT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝐓𝐆: https://t.me/𝐒𝐀𝐇𝐄𝐋69𝐊
    𝐈𝐍𝐒𝐓𝐀: https://www.instagram.com/𝐒𝐀𝐇𝐄𝐋_4203?igsh=YzljYTk1ODg3Zg==
    𝐂𝐀𝐏𝐂𝐔𝐓: 𝐒𝐀𝐇𝐄𝐋69𝐊
    𝐓𝐈𝐊𝐓𝐎𝐊: 𝐄𝐑𝐑𝐎𝐑
    𝐘𝐓: 𝐒𝐀𝐇𝐄𝐋 𝐀𝐇𝐌𝐄𝐃 𝐉𝐈𝐒𝐀𝐍 
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
