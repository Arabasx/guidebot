const Jimp = require("jimp");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  const randomNum = Math.floor(Math.random() * 101);
  // await message.channel.send(`https://imgur.com/yOTJVUm`);
  const image = await Jimp.read("./Screenshot_2.png");
  const imagex = await Jimp.read("./pngegg.png");
  const image3 = await imagex.composite(image, 275, 170);
  await image3.write("superabdou.png");
  let prefix = args[0] ? `${args[0]} is` : `You are`;
  await message.channel.send(`${prefix} ${randomNum} % abdou`, {
    files: ["./superabdou.png"],
  });

  //let member = message.mentions.users.first();
  //console.log(member.displayAvatarURL());
  //const imageavatar = await Jimp.read(member.displayAvatarURL());
  //imageavatar.write("superabdou.png");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "kekabdou",
  category: "Miscelaneous",
  description: "abdou meter",
  usage: "kekabdou",
};
