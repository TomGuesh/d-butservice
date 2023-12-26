const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.GuildMembers
    // Ajoutez d'autres intents au besoin
  ] 
});

// ... Votre code ici

client.login('MTE4OTMyMzUzMTY4MzY0NzUxOA.G2i0mW.BGkMlDxE604grVgxeT0SA7eRDoVTFu6AATOx7w');


client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === '!priseservice') {
    // Prise de service
    if (!serviceData.has(message.author.id)) {
      serviceData.set(message.author.id, { startTime: Date.now() });
      message.reply('Vous avez pris votre service.');
    } else {
      message.reply('Vous êtes déjà en service.');
    }
  } else if (message.content.toLowerCase() === '!findeservice') {
    // Fin de service
    if (serviceData.has(message.author.id)) {
      const startTime = serviceData.get(message.author.id).startTime;
      const endTime = Date.now();
      const serviceTime = endTime - startTime;

      message.reply(`Vous avez terminé votre service. Temps de service : ${msToTime(serviceTime)}`);
      serviceData.delete(message.author.id);
    } else {
      message.reply('Vous n\'êtes pas en service.');
    }
  }
});

// Convertir la durée en format lisible
function msToTime(duration) {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return `${hours} heures, ${minutes} minutes et ${seconds} secondes`;
}

// Remplacez 'YOUR_BOT_TOKEN' par le token de votre bot Discord
client.login('MTE4OTMyMzUzMTY4MzY0NzUxOA.G2i0mW.BGkMlDxE604grVgxeT0SA7eRDoVTFu6AATOx7w');
