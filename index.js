const ms = require('ms')
async function banall(serverid, ban_reason, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    try {
    throw new Error('Make sure the ID of the server you provide is VALID.')
} catch(err) {
  console.error(err)
}
  }
  else {
    await client_name.guilds.cache.get(serverid).members.cache.forEach(async member => {
      await member.ban({ reason: ((!ban_reason) ? '' : ban_reason) })
    })
  }
}
async function kickall(serverid, kick_reason, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    try {
    throw new Error('Make sure the ID of the server you provided is VALID.')
} catch(err) {
  console.error(err)
}
  }
  else {
    await client_name.guilds.cache.get(serverid).members.cache.forEach(async member => {
      await member.kick(((!kick_reason) ? '' : kick_reason))
    })
  }
}
async function deleteAllChannels(serverid, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
try {
    throw new Error('Make sure the ID of the server you provided is VALID.')
} catch(err) {
  console.error(err)
}
  }
  else {
    await client_name.guilds.cache.get(serverid).channels.cache.forEach(async channel => {
      await channel.delete()
    })
  }
}
async function createChannelsLoop(serverid, channels_name, times_messsage_is_sent, channel_message, topic, nsfw, channel_cooldown, reason, times, client_name, event) {
  if(!client_name.guilds.cache.get(serverid)) {
    try {
    throw new Error('Make sure the ID of the server you provided is VALID.')
} catch(err) {
  console.error(err)
}
  }
  else if(!channels_name) {
    try {
    throw new Error('Please put a valid channel name to create.')
} catch(err) {
  console.error(err)
}
  }
  else if(isNaN(times)) {
    try {
    throw new Error('Please make sure you provided a valid number at times field.')
} catch(err) {
  console.error(err)
}
  }
  else {
    for(let raid = 0;raid < times;raid++) {
      if(client_name.guilds.cache.get(serverid).channels.cache.size >= 498) {
        break;
      } else {
        client_name.guilds.cache.get(serverid).channels.create(channels_name, {
        type: 'text',
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
    try {
    throw new Error('Please make sure you put a VALID server ID inside serverid field.')
} catch(err) {
  console.error(err)
}
  }
  else if(!dmall_message) {
    try {
  throw new Error('I can\'t dmall a blank message...')
} catch(err) {
  console.error(err)
}
  }
  else {
    await client_name.guilds.cache.get(serverid).members.cache.forEach(async member => {
      await member.send(dmall_message)
    })
  }
}
async function deleteAllEmojis(serverid, client_name, event) {
  if(!client.guilds.cache.get(serverid)) {
    try {
    throw new Error('Please make sure the ID of the server you provided is a VALID one.')
} catch(err) {
  console.error(err)
}
  }
  else {
    await client.guilds.cache.get(serverid).emojis.cache.forEach(async emoji => {
      await emoji.delete()
    })
  }
}
async function deleteAllRoles(serverid, client_name, event) {
  if(!client.guilds.cache.get(serverid)) {
    try {
    throw new Error('Please make sure the ID of the server you provided is a VALID one.')
} catch(err) {
  console.error(err)
}
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
