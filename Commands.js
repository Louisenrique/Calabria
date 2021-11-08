const Discord = require('discord.js');
const bot = new Discord.Client({partials: ['MESSAGE' , 'CHANNEL' , 'REACTION']});
const token = 'TOKEN'
const messages = ['Twentyone Pilots ' , 'AC/DC' , 'Rick Astley' , 'Logic' , 'Eminem' , 'Nirvana']
let current = 1;
const fs = require('fs')


const { userInfo } = require('os');



//Hi befehl


bot.on('message' , (Hi) => {
    if(Hi.content == ',Hi' && Hi.guild && !Hi.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Hallo,wie geht es dir?')
            .setDescription('Wie war dein Tag?')
            .setColor('#777675')
            .setTimestamp()
            .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.OYv7ekHsnbV0XB2zJeaB6AHaEK&pid=Api')
            

            Hi.channel.send(embed)
    }
})

//gut

bot.on('message' , (gut) => {
    if(gut.content == ',gut' && gut.guild && !gut.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Das freut mich für dich.')
            .setDescription('ich hoffe er bleibt so.')
            .setColor('#777675')
            .setTimestamp()


            gut.channel.send(embed)
    }
})


bot.on('message' , (gn8) => {
    if(gn8.content == ',gn8' && gn8.guild && !gn8.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Schlaf gut')
            .setImage('https://cdn.discordapp.com/emojis/817519064250318868.png?v=1')
            .setColor('#777675')
            .setTimestamp()


            gn8.channel.send(embed)
    }
})

//schlecht

bot.on('message' , (schlecht) => {
    if(schlecht.content == ',schlecht' && schlecht.guild && !schlecht.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Das ist nicht gut, hier ein Katzenbild für dich:')
            .setImage('https://tse1.mm.bing.net/th?id=OIP.Uu-LcE0KRVNPkhZtK6BhPwHaEK&pid=Api')
            .setColor('#777675')


            schlecht.channel.send(embed)
    }
})

//Ping

bot.on('message', function(message) {
    if(message.content === ',Ping') {
        message.reply('-')
        message.reply('-')
        message.reply('-')
        message.reply('Pong')

       
    }
})

// server-info


bot.on('message', function(message) {
    if(message.content === ",serverinfo"){
        if(!message.guild) return;



        let server = {
            logo: message.guild.iconURL(),
            name: message.guild.name,
            createtAt: message.guild.createdAt,
            roles: message.guild.roles,
            members: message.guild.memberCount,
            verified: message.guild.verified,
            region: message.guild.region,

        }

        let embed = new Discord.MessageEmbed()
        .setTitle('**Serverinfo**')
        .setColor('RANDOM')
        .setThumbnail(server.logo)
        .addField('**Name**: ', server.name, true)
        .addField('**Erstellt am**:', server.createdAt, true)
        .addField('**Region**: ', server.region, true)
        .addField('**Verifiziert**: ', server.verified,true)
        .addField('**Mitglieder**: ', server.members,true)
        .addField('**Rollen**:', server.roles,true)
        message.channel.send(embed);
    }



    bot.on('message' , (love) => {
        if(love.content == ',Die mag ich' && love.guild && !love.member.user.bot){
            var embed = new Discord.MessageEmbed()
                .addField('1.', 'r3v1510n')
                .addField('2. ', '_Phil')
                .addField('3. ', 'Mein Lama PB')
                .setTitle('Die hier?')
                .setColor('RANDOM')

    
    
                love.channel.send(embed)
        }
    })



    








})




   

    









  //user-info

  bot.on('message' , function(message) {
    if(message.content.startsWith(",userinfo")){
        let user = message.mentions.users.first() || message.author



        let userinfo = {
            avatar: user.avatarURL(),
            name: user.username,
            discrim: `#${user.discriminator}`,
            id: user.id,
            status: user.presence.status,
            bot: user.bot,
            Eram: user.createdAt,

        }

        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(userinfo.avatar)
        .addField('**Username**: ', userinfo.name, true)
        .addField('**Discriminator**:', userinfo.discrim, true)
        .addField('**ID**: ', userinfo.id, true)
        .addField('**Status**: ', userinfo.status,true)
        .addField('**BOT**: ', userinfo.bot,true)
        .addField('**Created at**: ',userinfo.Eram,true)

        message.channel.send(embed);
    }
   
})


// avatar

bot.on('message' , function(message) {
    if(message.content.startsWith(",av")){
        let user = message.mentions.users.first() || message.author



        let ava = {
            avatar: user.avatarURL(),
            name: user.username,
 

        }

        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(ava.avatar)
        


        message.channel.send(embed);
    }
   
})

























//Lyxivia

bot.on('message' , (Lyxivia) => {
    if(Lyxivia.content == ',Lyxivia' && Lyxivia.guild && !Lyxivia.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setColor('#777675')
            .setTitle('Ich vermisse meinen Bruder!')
            .setImage('https://cdn.discordapp.com/attachments/855067856054911037/856916862368350228/unknown.png')
            

            Lyxivia.channel.send(embed)
           
    }
   
})



//spachteln

bot.on('message' , (spachteln) => {
    if(spachteln.content == ',spachteln' && spachteln.guild && !spachteln.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('guten Hunger')
            .setColor('#777675')
            .setImage('https://tse3.mm.bing.net/th?id=OIP.Tyygj3CyyPufk2qm9gMAeQHaE7&pid=Api')
            .setDescription('Lass mich aber nicht so lange alleine.')


            spachteln.channel.send(embed)
    }
})




bot.on('message' , (danke) => {
    if(danke.content == ',danke' && danke.guild && !danke.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Kein Problem dafür bin ich da.')
            .setColor('#777675')
            .setImage('https://emoji.discord.st/emojis/76a4a732-d821-4793-a05e-aea7180ca88d.png')
            .setTimestamp()


            danke.channel.send(embed)
        
    }
})

//Nirvana

bot.on('message' , (Nirvana) => {
    if(Nirvana.content == ',Nirvana' && Nirvana.guild && !Nirvana.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Smells likes teen spirit ist ein guter song.')
            .setColor('#777675')
            .setTimestamp()


            Nirvana.channel.send(embed)
        
    }
})

bot.on('message', function(message) {
    if(message.content === ',Nirvana') {
        message.channel.send('https://tenor.com/view/nirvana-gif-8656912')

       
    }
})



//Nitro

bot.on('message' , (Nitro) => {
    if(Nitro.content == ',Nitro' && Nitro.guild && !Nitro.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Hier ein geschenk für dich')
            .setImage('https://cdn.discordapp.com/attachments/818374346082615316/853340423636385852/unknown.png')
            .setColor('#777675')
            .setTimestamp()


            Nitro.channel.send(embed)
        
    }
})

//Tableflip => muss noch gemacht werden


bot.on('message', function(message) {
    if(message.content === ',(╯°□°）╯︵ ┻━┻') {
        message.reply('Hahahaha verarscht');
       
    }
})



//Lucidity

bot.on('message' , (Lucidity) => {
    if(Lucidity.content == ',Lucidity' && Lucidity.guild && !Lucidity.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Er hat zwar Lyxivia erstzt.')
            .setDescription('Ich mag ihn mittlerweile.')
            .setColor('#777675')
            .setTimestamp()
            .setThumbnail('https://tse1.explicit.bing.net/th?id=OIP.sLC5huJRPcTi9ewmiUHC4gHaE8&pid=Api')
            

            Lucidity.channel.send(embed)
    }
})



bot.on('message' , (klo) => {
    if(klo.content == ',klo' && klo.guild && !klo.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Seil einen für mich mit ab!')
            .setImage('https://media.discordapp.net/attachments/837348459396202526/858447237315035157/unknown.png?width=542&height=480')
            .setColor('#777675')
            .setTimestamp()
            
            

            klo.channel.send(embed)
            
    }
})

//cod

bot.on('message' , (COD) => {
    if(COD.content == ',COD' && COD.guild && !COD.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('@Phil landet immer auf dem Turm in Schwarzmarkt.')
            .setColor('#777675')
            .setImage('https://cdn.discordapp.com/attachments/837348459396202526/860167265084768276/unknown.png')
            .setTimestamp()


            COD.channel.send(embed)
        
    }
})

//Eminem


bot.on('message' , (Eminem) => {
    if(Eminem.content == ',Eminem' && Eminem.guild && !Eminem.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('The Real slim shady!!')
            .setColor('#777675')
            .setTimestamp()


            Eminem.channel.send(embed)
        
    }
})
bot.on('message', function(message) {
    if(message.content === ',Eminem') {
        message.channel.send('https://tenor.com/view/eminem-gif-18099355')

       
    }
})










//ACDC

bot.on('message' , (ACDC) => {
    if(ACDC.content == ',AC/DC' && ACDC.guild && !ACDC.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('Ich habe kein Lieblingslied. ICH MAG ALLE!!!')
            .setColor('#777675')
            .setTimestamp()


            ACDC.channel.send(embed)
        
    }
})



            bot.on('message', function(message) {
                if(message.content === ',AC/DC') {
                    message.channel.send('https://tenor.com/view/rock-and-roll-acdc-musician-gif-15287637')

                   
                }
            })



            bot.on('message', function(message) {
                if(message.content === ',Linkin Park') {
                    message.channel.send('Guter geschmack.');
                    message.channel.send('https://tenor.com/view/linkin-park-chester-bennington-mike-shinoda-gif-11266435')

                   
                }
            })

            bot.on('message', function(message) {
                if(message.content === ',Logic') {
                    message.channel.send('Mein Lieblingslied ist Perfect.');
                    message.channel.send('https://tenor.com/view/logic-gif-9064307')

                   
                }
            })
            //Help Embed
            bot.on('message' ,(mlk) => {
                if(mlk.content == ',Help me' && mlk.guild && !mlk.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                    .setColor('#b81a7d')
                    .setTitle('Ich helf dir')
                    .setAuthor('Louis-Enrique', 'https://discord.com/channels/@me/817073861530484747')
                    .setThumbnail('https://cdn.discordapp.com/attachments/837348459396202526/860906819269558283/discord_icon_logo_remix.png')
                    .setDescription('Help = um Hilfe zu bekommen, aber das weißt du ja schon.')
                    .addField('---------', 'Hi = um Hallo zu sagen.')
                    .addField('---------','klo = sagt deinen Freunden was zutun ist.' )
                    .addField('---------','Lucidity = Ich kann ihn nicht ausstehen.')
                    .addField('---------','Lyxivia = als erinnerung an meinen Bruder, der jetz vertsaubt =(')
                    .addField('---------','Nirvana  = beschreibung kommt noch.')
                    .addField('---------','Linkin Park  = beschreibung kommt noch.')
                    .addField('---------','AC/DC  = beschreibung kommt noch.')
                    .addField('---------','Logic = Ich glaube langsam hast du es verstanden.')
                    .addField('Schere/Stein/Papier','Schere = um schere zu setzten./ Stein = um stein zu setzten./Papier = diesen Befehl gibt es noch nicht.')
                    .setTimestamp()



                    mlk.channel.send(embed)
                }
            })
            

            //Schere stein papier

            bot.on('message' , (Schere) => {
                if(Schere.content == ',Schere' && Schere.guild && !Schere.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Unentschieden')
                        .setColor('#ffcd00')
                        .setDescription('--')
                        .setThumbnail('https://tse2.mm.bing.net/th?id=OIP._rREUwAAch2Wxm12hUzjhQHaD4&pid=Api')
                        .setTimestamp()
                
                    

            
            
                        Schere.channel.send(embed)
                    
                }
   
            })


            bot.on('message' , (Stein) => {
                if(Stein.content == ',Stein' && Stein.guild && !Stein.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Verloren')
                        .setColor('#ff0000')
                        .setDescription('--')
                        .setThumbnail('https://tse2.mm.bing.net/th?id=OIP.F826Ec4jNmQtqWHpR8S8ugHaHa&pid=Api')
                        .setTimestamp()
                
                    

            
            
                        Stein.channel.send(embed)
                    
                }
   
            })

            bot.on('message' , (Scherer ) => {
                if(Scherer.content == ',Scherer' && Scherer.guild && !Scherer.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Gewonnen')
                        .setColor('#00ff27')
                        .setDescription('--')
                        .setThumbnail('https://tse2.mm.bing.net/th?id=OIP.F826Ec4jNmQtqWHpR8S8ugHaHa&pid=Api')
                        .setTimestamp()
                
                    

            
            
                        Scherer.channel.send(embed)
                    
                }
   
            })

            bot.on('message' , (schere) => {
                if(schere.content == ',schere' && schere.guild && !schere.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Verloren')
                        .setColor('#ff0000')
                        .setDescription('--')
                        .setThumbnail('https://tse1.explicit.bing.net/th?id=OIP.jzTDj3FikE8nyV57KdVWSgHaHa&pid=Api')
                        .setTimestamp()
                
                    

            
            
                        schere.channel.send(embed)
                    
                }
   
            })

            //Rules
            bot.on('message' , (Rules) => {
                if(Rules.content == ',Unsere_regeln' && Rules.guild && !Rules.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Bitte mache dich mit den Regeln unseres Servers vertraut.')
                        .setColor('#777675')
                        .setThumbnail('https://tse2.mm.bing.net/th?id=OIP.24SMSDAhKVYcUOaw1GbuzgHaHM&pid=Api')
                        .addField('§1 Grundregel' , '» Seid gegenüber jeder Person respektvoll. Jede Art von beleidigenden, sexistischen, radikalen, verachtenden, ethisch inkorrekten, NSFW, potentiell gefährlichen und durch das Gesetz verboten Aussagen oder Dateien sind verboten.')
                        .addField('§2 Werbung', '» Jegliche Form von Werbung ist strengstens untersagt.','» Discord-Invites werden ausnahmslos gebannt.')
            
            
                        Rules.channel.send(embed)
                    
                }
            })





            //Bot-prefixes

            bot.on('message' , (Prefix) => {
                if(Prefix.content == ',Prefixes' && Prefix.guild && !Prefix.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Hier hast du die verschiedenen Prefixe der Bots')
                        .setColor('#777675')
                        .addField('Calabria', ',')
                        .addField('School-Help','-')
                        .addField('MEE6','!')
                        .addField('Lucidity','_')
                        .addField('Lyxivia','_')
                        .setThumbnail('https://cdn.discordapp.com/avatars/839557363177750558/aee97ab0242fbc09cad5da3940e1f877.png?size=1024')
                        .setTimestamp()
            
            
                        Prefix.channel.send(embed)
                    
                }
            })




            //infos-calabria

            bot.on('message' ,async (infos) => {
                if(infos.content == ',LB-info' && infos.guild && !infos.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle('Louis Bots')
                        .setColor('#dc6e04','#cb00af')
                        .setThumbnail('https://cdn.discordapp.com/attachments/855067856054911037/865902022111920128/discord_icon_logo_remix.png')
                        .addField('---------------- ' , ' Ihr erhaltet einen Ping wenn sich etwas ändert', )
                        .setDescription(`Hallo zusammen. Wenn es Updates zu Louis Bots gibt werdet ihr informiert.`)
                        .addField('Calabria', 'Reagiere mit <:discord_icon_logo_remix:865902225540775946> um die Rolle Calabria zu bekommen.')
                        .addField('Game-Bot', 'Reagiere mit <:th:866279702628007956> um die Rolle Game-bot zu bekommen.')
                        .addField('School Help','Reagiere mit <:54734779:866365325229686786> um die Rolle School Help zu bekommen.')
                        .addField('Alle Bots','Reagiere mit <:robot:866232497427316736> um zu jedem bot infos zu bekommen.')
                        .setURL('https://discord.com/api/oauth2/authorize?client_id=839557363177750558&permissions=0&scope=bot')
            
                        let sendMessage = await  infos.channel.send(embed)
                        sendMessage.react('<:discord_icon_logo_remix:865902225540775946>')
                        sendMessage.react('866232497427316736')
                        sendMessage.react('<:th:866279702628007956>')
                        sendMessage.react('<:54734779:866365325229686786>')
                }
            })

            bot.on('messageReactionAdd', async (reaction, user, channel) => {
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch;

                if(user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id === '864963607807655986') {
                        if(reaction.emoji.id === '865902225540775946') {
                            reaction.message.guild.members.cache.get(user.id).roles.add('866015069212114945')
                          }

                          else if(reaction.emoji.id === '866232497427316736'){
                            reaction.message.guild.members.cache.get(user.id).roles.add('866234289720524810')
                        }

                        else if(reaction.emoji.id === '866279702628007956') {
                            reaction.message.guild.members.cache.get(user.id).roles.add('866280430668087328')
                        }

                        else if(reaction.emoji.id === '866365325229686786'){
                            reaction.message.guild.members.cache.get(user.id).roles.add('866366342557597706')
                        }
                    
                }
            })


            bot.on('messageReactionRemove', async (reaction, user, channel) => {
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch;

                if(user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id === '864963607807655986') {
                        if(reaction.emoji.id === '865902225540775946') {
                            reaction.message.guild.members.cache.get(user.id).roles.remove('866015069212114945')
                          }

                          else if(reaction.emoji.id === '866232497427316736'){
                            reaction.message.guild.members.cache.get(user.id).roles.remove('866234289720524810')
                        }
                        else if(reaction.emoji.id === '866279702628007956') {
                            reaction.message.guild.members.cache.get(user.id).roles.remove('866280430668087328')
                        }
                        else if(reaction.emoji.id === '866365325229686786'){
                            reaction.message.guild.members.cache.get(user.id).roles.remove('866366342557597706')
                        }

                    
                }
            })





//food

bot.on('message' ,async (FR) => {
    if(FR.content == ',Foodpornrols' && FR.guild && !FR.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle('**Foodpornrols**')
            .setColor('YELLOW')
            .addField('<:Chefexcelent:897499031301943317> ' , ' Du kochst gerne und willst auch ab und an ein geiles Rezept posten.', )
            .setDescription(`Hier gibts Rollen rund ums Essen.`)
            .addField('🥘', 'Du kannst/willst nicht kochen, du Postest nur gerne geiles Essen.')
            .addField('<a:Voollgefressen:897505438441046136>', 'Du isst einfach zu gerne (vielleicht auch zu viel ;). )')
            

            let sendMessage = await  FR.channel.send(embed)
            sendMessage.react('<:discord_icon_logo_remix:865902225540775946>')
            sendMessage.react('866232497427316736')
            sendMessage.react('<:th:866279702628007956>')
            sendMessage.react('<:54734779:866365325229686786>')
    }
})

bot.on('messageReactionAdd', async (reaction, user, channel) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch;

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '864963607807655986') {
            if(reaction.emoji.id === '865902225540775946') {
                reaction.message.guild.members.cache.get(user.id).roles.add('866015069212114945')
              }

              else if(reaction.emoji.id === '866232497427316736'){
                reaction.message.guild.members.cache.get(user.id).roles.add('866234289720524810')
            }

            else if(reaction.emoji.id === '866279702628007956') {
                reaction.message.guild.members.cache.get(user.id).roles.add('866280430668087328')
            }

            else if(reaction.emoji.id === '866365325229686786'){
                reaction.message.guild.members.cache.get(user.id).roles.add('866366342557597706')
            }
        
    }
})


bot.on('messageReactionRemove', async (reaction, user, channel) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch;

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '864963607807655986') {
            if(reaction.emoji.id === '865902225540775946') {
                reaction.message.guild.members.cache.get(user.id).roles.remove('866015069212114945')
              }

              else if(reaction.emoji.id === '866232497427316736'){
                reaction.message.guild.members.cache.get(user.id).roles.remove('866234289720524810')
            }
            else if(reaction.emoji.id === '866279702628007956') {
                reaction.message.guild.members.cache.get(user.id).roles.remove('866280430668087328')
            }
            else if(reaction.emoji.id === '866365325229686786'){
                reaction.message.guild.members.cache.get(user.id).roles.remove('866366342557597706')
            }

        
    }
})




































          





            
                    //warn 1



            bot.on('message' , async (warn) => {
                if(warn.content == ',warn1' && warn.guild && !warn.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle(`Warnung!!!. `)
                        .setColor('RED')
                        .setTimestamp()
                        .addField('------' , 'Machen wir einen Deal, du reagierst mit : <a:Prisoncry:876862159479513148> : und wir lassen es beruhen. Wenn nicht dann gibts Ärger')
                        .addField('------' ,'Noch **1** warn verbleibend')
                        .setDescription('Pass bloß auf!!!!😤 Ich kenn dich zwar nicht aber wenn ich noch einmal mitbekomme das du Scheiße baust mach ich dich fertig <:peepoPoliceSwat:876856537820327956>')
            
            
                        let sendMessage = await  warn.channel.send(embed)
                        sendMessage.react('<a:Prisoncry:876862159479513148>')
                    
                }
            })

            bot.on('messageReactionAdd', async (reaction, user, channel) => {
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch;

                if(user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id === '876863550402985985') {
                        if(reaction.emoji.id === '876862159479513148') {
                            reaction.message.guild.members.cache.get(user.id).roles.add('876858102509629480')
                          }

                        
                    
                }
            })


            //warn2 

            bot.on('message' , async (warnn) => {
                if(warnn.content == ',warn 2' && warnn.guild && !warnn.member.user.bot){
                    var embed = new Discord.MessageEmbed()
                        .setTitle(`Warnung!!!. `)
                        .setColor('RED')
                        .setTimestamp()
                        .addField('------' , 'Urteil , du reagierst mit : <:PEs_gun:876867396386840676> : sonst gibts Ärger')
                        .addField('Eischränkungen:' ,'Links,Dateien usw. sind für dich abgeschalten. \nDu kannst deine Identität (Nickname) nicht ändern ')
                        .addField('-------', 'Das war die **letzte Warnung**')
                        .setDescription('Das ist meine letzte Warnung, Du bist bereits vorbestraft ')
            
            
                        let sendMessage = await  warnn.channel.send(embed)
                        sendMessage.react('<:HOBILLEGAL:876869166211166298>')
                    
                }
            })

            bot.on('messageReactionAdd', async (reaction, user, channel) => {
                if(reaction.message.partial) await reaction.message.fetch();
                if(reaction.partial) await reaction.fetch;

                if(user.bot) return;
                if(!reaction.message.guild) return;

                if(reaction.message.channel.id === '876863550402985985') {
                        if(reaction.emoji.id === '876869166211166298') {
                            reaction.message.guild.members.cache.get(user.id).roles.add('876866855531331596')
                          }

                        
                    
                }
            })

           

























//rules

bot.on('message' , async (Regelwerk) => {
    if(Regelwerk.content == ',Regelwerk' && Regelwerk.guild && !Regelwerk.member.user.bot){
        var embed = new Discord.MessageEmbed()
            .setTitle(`Das Regelwerk `)
            .setColor('GREEN')
            .addField('§1 Grundregel' , '» Seid gegenüber jeder Person respektvoll. Jede Art von beleidigenden, sexistischen, radikalen, verachtenden, ethisch inkorrekten, NSFW, potentiell gefährlichen und durch das Gesetz verboten Aussagen oder Dateien sind verboten.')
            .addField('§2 Werbung' ,'» Jegliche Form von Werbung ist strengstens untersagt. \n» Discord-Invites werden ausnahmslos gebannt.')
            .addField('§3 Name und Avatar', '» Es darf niemand kopiert werden. Name und Avatar sollten möglichst einzigartig sein.')
            .addField('§4 Verhalten in den Channeln', '» Spam und Capslock vermeiden. Channel-Thema beachten. \n» Keine Stimmverzerrer oder andere laute/störende Geräusche.')
            .addField('§5 Datenschutz' ,'» Keine Aufnahmen oder ähnliches ohne Zustimmung aller zu hörenden/sehenden Personen. \n» Keine fremden Daten veröffentlichen.\n» Private Missverständnisse privat klären')
            .addField('§6 Verkäufe und Geschäfte', '» Verkäufe und Geschäfte sind hier verboten. (Einen Fortnite-Account zu verkaufen ist gegen die Epic Games Richtlinien).')
            .setDescription('Pass bloß auf!!!!😤 Ich kenn dich zwar nicht aber wenn ich noch einmal mitbekomme das du Scheiße baust mach ich dich fertig <:peepoPoliceSwat:876856537820327956>')


            let sendMessage = await  Regelwerk.channel.send(embed)
            sendMessage.react('✅')
            sendMessage.react('❌')
        
    }
})

bot.on('messageReactionAdd', async (reaction, user, channel) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch;

    if(user.bot) return;
    if(!reaction.message.guild) return;

    if(reaction.message.channel.id === '837272402085150750') {
            if(reaction.emoji.id === '899717626786369546') {
                reaction.message.guild.members.cache.get(user.id).roles.add('867087660752699392')
              }
              else if(reaction.emoji.id === '899717916004589619'){
                reaction.message.guild.members.cache.get(user.id).roles.add('899719513979891712')
            }

              
            
            
        
    }
})








































//warn

bot.on('message', function(message) {
    if(message.content.startsWith(",warn")) {
        let user = message.mentions.users.first();
        let grund = message.content.split(" ").slice(2).join(" ");

        if(!user) return message.channel.send("Glaubst du ich bin Gott, du must mir schon sagen wen!");

        if(!grund) grund = "Kein Grund!"

        let embed = new Discord.MessageEmbed()
        .setTitle("Warnung!")
        .setColor('RED')
        .setDescription(`Warnung <@!${user.id}>. Pass bloß auf!!!! <:HOBILLEGAL:876869166211166298> \n \nGrund: ${grund}`);
        

        message.channel.send(embed);
    }

})































































bot.on('ready',() => {
    console.log("Achtung!!!! Bot ist gestartet")





    bot.user.setActivity(messages[0] , {type: 'LISTENING'} )


    setInterval(() => {
        if(messages[current]){
            bot.user.setActivity(messages[current] , {type: 'LISTENING'} )
            current++;
        }else{
            current = 0;
            bot.user.setActivity(messages[current] , {type: 'LISTENING'} )
        }
    }, 80*1000)
});






bot.login(token);
