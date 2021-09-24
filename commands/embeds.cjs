module.exports = {
    name: "embeds",
    description: "embeds will go here",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('This is an embed for server rules')
        .addFields(
            {name: 'rule 1', value: 'Be nice'}
        )
        .setImage('https://www.wearethepit.com/wp-content/uploads/2020/09/ACDC-leak-shot-4-678x381.jpg')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }
}