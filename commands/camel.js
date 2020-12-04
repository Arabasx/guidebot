const fetch = require("node-fetch");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars

  //msg.edit(`You are ${randomNum} % dz`);
  // console.log("dz");
  let data = await fetch(
    "https://api.imgur.com/3/gallery/search/top/1?q=camel",
    { headers: { Authorization: "Client-ID 470b70fcfccd070" } }
  );
  data = await data.json();
  const randomNum = Math.floor(Math.random() * data.data.length + 1);
  const msg = await message.channel.send(data.data[randomNum].link);
};
//r.data[0].link
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "plscamel",
  category: "Miscelaneous",
  description: "Send some random camels :)",
  usage: "plscamel",
};
