const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function(){
    bot.user.setGame(prefix + 'help');

})

        



bot.on("message", message => {
    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@504966053793759233>")
            .addField(prefix + "help", "Affiche cette page")
         //   .addField(prefix + "candidature", "Affiche les Google Form disponible pour les candidature du STAFF")
            .addField(prefix + "infos", "Affiche les infos du Discord ; ex : Nom du serveur, Date de création, etc...")
            .addField(prefix + "sondage", "Permet de faire un sondage si NeyZn a un doute")
            .setFooter("En espérant que vous passerez du bon temps sur le Discord de NeyZn")
        message.channel.sendEmbed(embed);
    }
        
 /*   if (message.content === prefix + "candidature") {
        var embed = new Discord.RichEmbed()
            .setTitle("Candidature Recrutements - STAFF :")
            .setDescription("Si vous souhaitez faire une candidature pour le STAFF de AccountRator c'est par ici!")
            .addField("Candidature Assistant", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .addField("Candidature Modérateur", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .setThumbnail("https://images-ext-1.discordapp.net/external/v6JHUmPI3owFTdb0Wa9_OYzlftwa5VGF70WvyWZ3Ssc/https/images-ext-1.discordapp.net/external/_veBMBMuqvtyKyNoVQJJj7Rb_hUI2N8P2kl-ncixLGM/https/valentinbraem.s-ul.eu/uEG28JXB:large")
            .setFooter("Ce sont des formulaires à remplir obligatoirement si vous voulez intégrer la STAFF")
        message.channel.sendEmbed(embed);
  }*/
});

bot.on('message', message => {
    if(message.content === prefix + 'infos') {
        let sicon = message.guild.iconURL;
        var embed = new Discord.RichEmbed()
        .setThumbnail(sicon)
        .setTitle("Page d'informations 1/2")
        .setDescription('Infomations du Discord')
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoins le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)

    message.channel.sendEmbed(embed)    
    }

   /* if (message.content.startsWith("*sondage")) {
        if(message.author.id == "404783132932571136", "356185137379016706"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "✅ Pour Oui | ❌ Pour Non")
                .setFooter(`Sondage crée par ${message.author.username}`)
            message.guild.channels.find("name", "sondages").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
                message.channel.send("@everyone")
                console.log(`${message.author.username} viens de faire un sondage !`);
                
            })   .catch(function() {
            })
            }else{
                return message.reply("Tu n'as pas la permission!")
        }
    }*/
})

bot.on('message', message => {
  if (message.content === prefix + "infos2"){
    let sicon = message.guild.iconURL;
    var embed = new Discord.RichEmbed()
    .setThumbnail(sicon)
    .setDescription('Infomations du Discord')
    .addField("Nom du Discord", message.guild.name)
    message.channel.sendEmbed(embed)
  }
}) 

bot.on("message", message => {
    if (message.content === prefix + "aide")
    var embed = new Discord.RichEmbed()
    .setDescription("Voici une page avec quelques outils pour vous aidez !")
    .addField("*contact", "- Contacter NeyZn")
    .addField("*donateur", "- Afficher les information sur le grade Donateur")
    .addField("*teamspeak", "- Afficher l'adresse du TeamSpeak de NeyZn")
    .addField("*twitter", "- Afficher le Twitter de NeyZn")
    .addField("*youtube", "- Afficher la chaîne YouTube de NeyZn")
    .addField("*neyzn", "- Afficher les informations sur le grade YouTuber")
    message.channel.sendEmbed(embed)
})

bot.login(process.env.TOKEN);


