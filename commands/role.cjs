module.exports = {
    name: "role",
    description: "this is a role command",
    execute(message, args){

        if(message.member.roles.cache.has('864890600259321856')){
            message.channel.send('you have the bot role!');
            message.member.roles.remove('864890600259321856');
        
        } else {
            message.channel.send('You cannot send this command because you dont have the right permissions. Changing that now');
            message.member.roles.add('864890600259321856').catch(console.error);
        }
        
        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You have the permission to kick members')
        }
        
    }
}