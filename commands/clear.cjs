module.exports = {
    name: "clear",
    description: "use this to clear messages",
    async execute(message, args){
        if(message.member.roles.cache.has('864890600259321856')){
            if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
            if(isNaN(args[0])) return message.reply("Please enter a real number");

            if (args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
            if(args[0] < 1) return message.reply("You must delete at least one message")
            
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });

        } else {
            message.channel.send('You cannot send this command because you dont have the right permissions.');
        }
    }
}