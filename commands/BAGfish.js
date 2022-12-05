import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/Clownfish.js'
import writejson from '../utils/writejson.js'
import _ from 'loadsh'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.cmfish.com/mobile/kinds/kindsorts.php?range=1&id=9')
    const $ = cheerio.load(data)
    // 新增一個新的網頁
    // const { data: fish } = await axios.get('https://www.ph84.idv.tw/forum/threads/380727/')
    // const $$ = cheerio.load(fish)
    const BAGfish = []

    $('tbody').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      const img = $(this).find('a img').attr('src')
      const text = $(this).find('.middleword').text()
      if (text !== '' && text.length < 10) {
        bubble.body.contents[2].contents[0].contents[0].contents[0].text = text
        bubble.body.contents[0].url = 'https://www.cmfish.com/' + img
        bubble.body.contents[0].action.uri = 'https://www.cmfish.com/mobile/kinds/' + $(this).find('a').attr('href')
        BAGfish.push(bubble)
      }
      bubble.body.contents[2].contents[0].contents[1].contents[0].contents[0].text = '分類：蓋刺魚科'
      // bubble.body.contents[2].contents[0].contents[1].contents[0].contents[0].text = $$('.bbWrapper').text().trim().slice(0, 5)
    })

    const replies = _.chunk(BAGfish, 12).map(BAGfish => {
      return {
        type: 'flex',
        altText: '大神仙查詢結果',
        contents: {
          type: 'carousel',
          contents: BAGfish
        }
      }
    })

    await event.reply(replies)
    if (process.env.WRITEJSON) {
      for (const i in replies) {
        writejson(replies[i], `BAGfish${i}`)
      }
    }
  } catch (error) {
    console.log(error)
    console.error('請稍後再試')
  }
}
