const Discord = require('discord.js');
        const client = new Discord.Client();
        client.on('ready', () => {
            console.log("Sarah's custom auto reply to mentions is ready!/Пользовательский автоматический ответ Сары на упоминания готов!");
               
  
  // status 
               let statuses = [
          "AutoReply on! by 0666˞#0666"
          
      ]
      setInterval(function(){
              let status = statuses[Math.floor(Math.random() * statuses.length)];
              client.user.setActivity(status, {type:"WATCHING"})
      
          }, 1000) //Seconds
  
    
          });
  
  
  
        client.on('message', msg => {
            if (msg.author === client.user) return;
            if (msg.isMentioned(client.user)) {
                if ([""].includes(msg.member.id)) {
                    return;
                }
                if ([""].includes(msg.guild.id)) {
                    msg.reply("Dont fucking mention me, dumbass");
                }
            }
        });

        client.login('TOKEN');
