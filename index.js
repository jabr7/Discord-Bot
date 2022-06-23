const Discord = require("discord.js");

const TOKEN = "OTI3Njk0NDQzNTcyNzg5MzA4.YdN8xw.90p666VCT40HTja9-FoR83_Z3Ik"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

/*Esto es  un event listener, y utilizo una funcion anonima
para ejecutar el codigo cuando el bot este en estado "ready",
que es cuando pudo logearse correctamente
*/
client.on("ready", () => {
    console.log(`Logeado como ${client.user.tag}`)
})

//Creacion de expresion regular para el matching del texto del mensaje de entrada
let re = new RegExp(/(te gustan)|(que pensas)*[?$]/);


client.on("messageCreate", (message) => {
    if (!message.author.bot) {
        if (re.test(message.content)) {
            //Por alguna razon el react da error
           // message.reply(message.react("🤢"))

            let numeroRandom = getRndInteger(0, 10);
            switch (numeroRandom) {
                case 1:
                    message.reply("Si. me encanta");
                    break;
                case 2:
                    message.reply("La verdad que me da igual");
                    break;
                case 3:
                    message.reply("Emmm espera que le pregunto a mi familia inexistente");
                    break;
                case 4:
                    message.reply("Como lo sabria? soy un bot, vos me creaste, idiota");
                    break;
                case 5:
                    message.reply("La verdad que ni idea");
                    break;
                case 6:
                    message.reply("No ves un poco mal ir preguntandole eso a un bot indefenso?");
                    break;
                case 7:
                    message.reply("No tengo hambre asi que no opino");
                    break;
                case 8:
                    message.reply("Por que estamos hablando de comida?");
                    break;
                case 9:
                    message.reply("Meh, depende del dia");
                    break;
                case 10:
                    message.reply("La verdad?, me das asco");
                    break;
                
                default:
                    break;
            }

           


        }
    }


    /*
        if (message.content == "te gusta la milanesa?") {
          //  message.reply(message.react("🤩"))
    
        }
    */

})
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.login(TOKEN)