const Jimp = require("jimp");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  const randomNum = Math.floor(Math.random() * 101);
  // await message.channel.send(`https://imgur.com/yOTJVUm`);
  const image = await Jimp.read("./owner.png");
  image.brightness(1 - randomNum / 100).write("opacity1.png");
  let prefix = args[0] ? `${args[0]} is` : `You are`;
  await message.channel.send(`${prefix} ${randomNum} % owner`, {
    files: ["./opacity1.png"],
  });

  console.log(args);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "howowner",
  category: "Miscelaneous",
  description: "abdou meter",
  usage: "howowner",
};
