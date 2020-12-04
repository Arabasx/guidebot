exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  const randomNum = Math.floor(Math.random() * 101);
  let prefix = args[0] ? `${args[0]} is` : `You are`;
  await message.channel.send(`${prefix} ${randomNum} % dz`);
  console.log(args);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "howdz",
  category: "Miscelaneous",
  description: "dz meter.",
  usage: "howdz",
};
