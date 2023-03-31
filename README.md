# Stable Diffusion Image Generator
Used to make requests to the Stable Diffusion API. Generally used to generate images with txt2img.

## Requirements
- Node.js v14
- Stable Diffusion

#### Configuring Stable Diffusion
To use this application you must enable Stable Diffusion API. 
Configure your file `webui-user.bat` and add `--api` in the `COMMANDLINE_ARGS` variable like this: `COMMANDLINE_ARGS=--api`.

#### Setup of EasyNegative
This app use `EasyNegative` for negative prompts. You must have installed `EasyNegative` in your stable diffusion. Download the file in this link: [EasyNegative](https://huggingface.co/datasets/gsdf/EasyNegative). Then just move the file in the `\stable-diffusion-webui\embeddings` folder.


## Installation

#### Environment setup
Before running the project you must configure your environments.\
Copy the environments from the file `.env.example` and create a new file called `.env`. Paste all the environments copied to the file `.env`.
You can configure the following properties as you need:\
****<sub>Ignore the discord enviroments if your are not setting up the discord bot</sub>****
| Environment Variables   | Description                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------|
| DISCORD_CLIENT_ID       | Your application's client id ([Discord Developer Portal](https://discord.com/developers/applications) > "General Information" > application id)              |
| DISCORD_BOT_TOKEN       | The token is essentially your bot's password; it's what your bot uses to login to Discord                     |
| DISCORD_GUILD_ID        | Your development server's id ([Enable developer mode](https://support.discord.com/hc/en-us/articles/206346498) > Right-click the server title > "Copy ID")               |
| DISCORD_SERVICE_ENABLED | True or false if the discord bot will be active                                                               |
| STABLE_DIFFUSION_URL    | Your basic url where your STABLE DIFFUSION app is located                                                     |
| DRIVE_FILE_LOCATION     | Your full path of where your file have been upload. This field is required if your are using the discord bot |

<sub>If your having trouble configuring your environment's just leave them exact as the .env.example file</sub>

#### How to run project
Open this project in your terminal in run the following commands

```
npm install
npm run dev
```


## Usage
The basic functionality of this project is to get random images based on random props provided by this app. This project contains a lot of useful tags when generating a image with the txt2img functionality of Stable Diffusion.

#### Using random prop generator
After running your program you can access the url of the project to generate random images. Each time you access the home page of this application it will create a image with Stable Diffusion (with random props). Each time you reload the page a new image will be created. All the images will be save in this application in the following route `./tmp/uploads`.

#### Using discord bot
Before using this functionality you must create your own discord bot. Follow the basic setup of a bot in this guide: [discord.js bot guide](https://discordjs.guide/#before-you-begin).
When you bot is configure correctly in your discord server you can use the following commands:

| Commands | Description                                     |
|----------|-------------------------------------------------|
| image    | Generate images based on tags                   |
| random   | Generate image based on random character traits |

## Recommendations
Usually i used the following models to generated images:
* Counterfeit
* MeinaMix

## Contributing
Your are free to add more data to the current seeds.

## Contact
If you have any questions or feedback about this project, feel free to contact me by pm.
If you would like to contribute to the project, please contact me.
Thank you for your interest in this small project!
