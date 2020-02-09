module.exports = {
	/* The token of your Discord Bot */
	token: "NDQ2MTkxMzEyNTY4NDUxMDgy.Xjaqug.BNr5qin1TVz3pDjJPqIEXhQgVvI",
	/* For the support server */
	support: {
		id: "662996368293363713",
		logs: "662996514615984149",
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false,
		secret: "ksWMVNJT5FUVNxv7YoK56lWL_KPjhKXL",
		baseURL: "https://localhost",
		logs: "662996514615984149",
		port: 3000,
		expressSessionPassword: "netark",
		failureURL: "https://localhost"
	},
	mongoDB: "mongodb://localhost",
	prefix: "*",
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Bot" // And the default footer for the embeds
	},
	defaultLanguage: "french",
	botname: "Bot", // The name of the bot
	/* Bot's owner informations */
	owner: {
		id: "440521902159822850", // The ID of the bot's owner
		name: "<h1> Netark </h1>#4672" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "_TMmyfKIwcCyygCR_VcufgmW0N9U5LSi.llaQJ3V1ECco4WFMEaiJQDlWJJzvTGR",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "1da711be-2bbc-4106-8458-df698c37d821",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// SIMPLE YOUTUBE API: https://console.developers.google.com/
		simpleYoutube: "AIzaSyBy_RrrvgWts1NXur2wXQEQiNxVFGFQRWE",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "c7b3ffb629d621a97e7716c60b58c0dbde2433a30318d7a7c0eb6807ceaa4895a529c9b9ccd1df1a28a40a8d1455070e361fd3d3f749b5fe8f0ab55bce0c76e6"
	},
	/* Emoji pour mes commandes */
	emojis: {
		error: ":565212755804684318:",
		// RE: https://cdn.discordapp.com/emojis/565212755804684318.png
		success: ":565212709591973896:",
		// RE: https://cdn.discordapp.com/emojis/565212709591973896.png
		loading: ":565214530121105418:",
		// RE: https://cdn.discordapp.com/emojis/565214530121105418.gif
		stats: ":bar-chart-isometric:",
		// RE: https://img.icons8.com/flat_round/64/000000/bar-chart-isometric.png
		ram: ":processor:",
		// RE: https://img.icons8.com/color/96/000000/processor.png
		version: ":installing-updates:",
		// RE: https://img.icons8.com/color/96/000000/installing-updates.png
		link: ":link:",
		// RE: https://img.icons8.com/color/96/000000/link.png
		voice: ":speaker:",
		// RE: https://img.icons8.com/color/96/000000/speaker.png
		add: ":plus:",
		// RE: https://img.icons8.com/flat_round/64/000000/plus.png
		vote: ":vote-button:",
		// RE: https://img.icons8.com/flat_round/96/vote-button.png 
		help: ":help:",
		// RE: https://img.icons8.com/color/96/000000/help.png
		warn: ":error--v1:",
		// RE: https://img.icons8.com/flat_round/64/000000/error--v1.png
		games: ":computer:",
		// RE: https://img.icons8.com/color/96/000000/computer.png
		crown: ":crown:",
		// RE: https://img.icons8.com/flat_round/96/000000/crown.png
		discriminator: ":hashtag-2:",
		// RE: https://img.icons8.com/color/96/000000/hashtag-2.png
		bot: ":bot:",
		// RE: https://img.icons8.com/color/96/000000/bot.png
		avatar: ":picture:",
		// RE: https://img.icons8.com/color/96/000000/picture.png
		calendar: ":calendar:",
		// RE: https://img.icons8.com/color/96/000000/calendar.png
		calendar2: ":calendar-2:",
		// RE: https://img.icons8.com/color/96/000000/calendar-2.png
		up: ":circled-up--v2:",
		// RE: https://img.icons8.com/cotton/64/000000/circled-up--v2.png
		pencil: ":pencil:",
		// RE: https://img.icons8.com/color/96/000000/pencil.png
		roles: ":admin-settings-male:",
		// RE: https://img.icons8.com/color/96/000000/admin-settings-male.png
		color: ":color-palette:",
		// RE: https://img.icons8.com/color/96/000000/color-palette.png
		minecraft: ":minecraft-sword:",
		// RE: https://img.icons8.com/color/96/000000/minecraft-sword.png 
		users: ":group:",
		// RE: https://img.icons8.com/color/96/000000/group.png
		title: ":tag-window:",
		// RE: https://img.icons8.com/color/96/000000/tag-window.png
		singer: ":rap:",
		// RE: https://img.icons8.com/ios-filled/96/000000/rap.png
		time: ":future:",
		// RE: https://img.icons8.com/color/96/000000/future.png
		search: ":search--v2:",
		// RE: https://img.icons8.com/cotton/96/000000/search--v2.png
		desc: ":text-box:",
		// RE: https://img.icons8.com/color/96/000000/text-box.png
		playlist: ":smart-playlist:",
		// RE: https://img.icons8.com/color/96/000000/smart-playlist.png
		channels: ":filled-chat:",
		// RE: https://img.icons8.com/color/96/000000/filled-chat.png
		afk: ":no-microphone:",
		// RE: https://img.icons8.com/color/96/000000/no-microphone.png
		id: ":id-verified:",
		// RE: https://img.icons8.com/color/96/000000/id-verified.png
		ip: ":ip-address:",
		// RE: https://img.icons8.com/color/96/000000/ip-address.png
		folder: ":opened-folder:",
		// RE: https://img.icons8.com/color/344/opened-folder.png
		desc2: ":edit-property:",
		// RE: https://img.icons8.com/color/344/edit-property.png
		patreon: ":28e759bcb1e00ad978afdf443e60c11e_icon:",
		// RE: https://cdn6.aptoide.com/imgs/2/8/e/28e759bcb1e00ad978afdf443e60c11e_icon.png
		server: ":root-server:",
		// RE: https://img.icons8.com/color/96/000000/root-server.png
		boost: ":w7LAR:",
		// RE: https://i.goopics.net/w7LAR.png
		status: {
			idle: ":bRVWW:",
			// RE: https://i.goopics.net/bRVWW.png
			dnd: ":lWN3A:",
			// RE: https://i.goopics.net/lWN3A.png
			offline: ":WRPWl:",
			// RE: https://i.goopics.net/WRPWl.png
			online: ":QdGW0:"
			// RE: https://i.goopics.net/QdGW0.png
		},
		letters: {
			a: ":RNemO:",
			// RE: https://i.goopics.net/RNemO.png
			w: ":AyKOA:",
			// RE: https://i.goopics.net/AyKOA.png
			r: ":7PKen:",
			// RE: https://i.goopics.net/7PKen.png
			d: ":vAgj7:"
			// RE: https://i.goopics.net/vAgj7.png
		},
		categories: {
			administration: ":horizontal-settings-mixer:",
			// RE: https://img.icons8.com/color/96/000000/horizontal-settings-mixer.png
			economy: ":banknotes:",
			// RE: https://img.icons8.com/color/96/000000/banknotes.png
			fun: ":smiling:",
			// RE: https://img.icons8.com/color/96/000000/smiling.png
			general: ":3X5oq:",
			// RE: https://i.goopics.net/3X5oq.png
			images: ":picture:",
			// RE: https://img.icons8.com/color/96/000000/picture.png
			moderation: ":police-badge:",
			// RE: https://img.icons8.com/color/96/000000/police-badge.png
			music: ":musically:",
			// RE: https://img.icons8.com/color/96/000000/musically.png
			owner: ":queen-uk:",
			// RE: https://img.icons8.com/color/96/000000/queen-uk.png
			custom: ":request-service:"
			// RE: https://img.icons8.com/color/96/000000/request-service.png
		}
	},
	/* Badges à venir */
	badges: {
		games: [
			{ name: "Minecraft", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "GTA", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "Fortnite", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "Mario", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "LOL", emoji: "XXXXXXXXXXX", price: 1200 }
		],
		flags: [
			{ name: "France", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Canada", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Swiss", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Great Britain", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "USA", emoji: "XXXXXXXXXXX", price: 1500 }
		],
		others: [
			{ name:"Rich", emoji: "XXXXXXXXXXX", price: 18000 },
			{ name:"Troll", emoji: "XXXXXXXXXXX", price: 3000 },
			{ name:"Atlanta", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name:"IAMABOT", emoji: "XXXXXXXXXXX", price: 1000 },
			{ name:"Discordien", emoji: "XXXXXXXXXXX", price: 500 }
		]
	},
	/* Status */
	status: [
		{
			name: "Custom bot",
			type: "LISTENING"
		},
		{
			name: "Boplo",
			type: "PLAYING"
		}
	],
	proMode: false, // Whether the bot is in pro mode (only users in the proUsers array will be able to invite the bot)
	/* The pro users */
	proUsers: [
		"DiscordUser ID",
		"Another DiscordUser ID"
	]
}
