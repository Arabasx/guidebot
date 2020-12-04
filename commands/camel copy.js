const fetch = require("node-fetch");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars

  //msg.edit(`You are ${randomNum} % dz`);
  // console.log("dz");
  let data = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=camel"
  );
  data = await data.json();
  const randomNum = Math.floor(Math.random() * data.data.length + 1);
  const msg = await message.channel.send(
    data.data[randomNum].images["480w_still"].url
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "plscamex",
  category: "Miscelaneous",
  description: "Send some random camels :)",
  usage: "plscamex",
};
