# Download Youtube Music

## What's Download Youtube Music?

This tool downloads videos on youtube in mp3 format. You can also set the name of the song, album, or artist.

## How to use

### 1. Download some tools

1. [Node.js](https://nodejs.org/ja/download/)
2. [ffmpeg](https://ffmpeg.org/download.html)

In Windows, you need to connect ffmpeg to path.

### 2. Create .env file

Create the .env file directly under the cloned folder.

```bash
vim .env
```

Then, write the following in the .env file and save it.

```.env
SESSION_SECRET=[appropriate character]
```

### 3. Install packages

Execute the following command.

```bash
npm i
```

### 4. Run

Execute the following command.

```bash
npm run build
npm run run
```

There is also a command that combines the above commands.

```bash
npm run start
```
