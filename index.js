import 'dotenv/config'
import linebot from 'linebot'
import quickReply from './commands/quickReply.js'
// import quickReplyCF from './commands/quickReplyCF.js'
import fishTank from './commands/fishTank.js'
import fishImg from './commands/fishImg.js'
import Clownfish from './commands/Clownfish.js'
import Boxfish from './commands/Boxfish.js'
import SAGfish from './commands/SAGfish.js'
import BAGfish from './commands/BAGfish.js'
import Gunfish from './commands/Gunfish.js'

// import { append } from 'cheerio/lib/api/manipulation.js'
// import express from 'express'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type !== 'text') return

  if (event.message.text === '魚缸分享') {
    fishTank(event)
  } else if (event.message.text === '水族討論') {
    fishImg(event)
  } else if (event.message.text === '海水魚') {
    quickReply(event)
  } else if (event.message.text === '小丑魚') {
    Clownfish(event)
    // quickReplyCF(event)
  } else if (event.message.text === '箱魨魚') {
    Boxfish(event)
  } else if (event.message.text === '小神仙') {
    SAGfish(event)
  } else if (event.message.text === '大神仙') {
    BAGfish(event)
  } else if (event.message.text === '砲彈魚') {
    Gunfish(event)
  }
})

// const linebotParser = bot.parser()

// app.post('/', linebotParser)

// app.get('/', (req, res) => {
//   res.srare(200).sed('ok')
// })

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
