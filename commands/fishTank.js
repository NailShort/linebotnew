import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/fishTank.js'
import writejson from '../utils/writejson.js'
import _ from 'loadsh'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.ph84.idv.tw/forum/forums/15/')
    const $ = cheerio.load(data)
    const fishTank = []
    // $('.p-navEl-link').each(function () {
    //   const bubble = JSON.parse(JSON.stringify(template))
    //   // bubble.hero.url = 'https://wdaweb.github.io/' + $(this).find('img').attr('src').substr(2).trim()
    //   bubble.body.contents[0].text = $(this).text().trim()
    //   // bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.card-description').text().trim()
    //   courses.push(bubble)
    // })
    $('.message--article').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      if ($(this).find('a').css('background-image') === 'none') {
        console.log('000')
      } else {
        bubble.hero.url = $(this).find('a').css('background-image')?.replace(/^url\(['"](.+)['"]\)/, '$1') || 'https://i.imgur.com/1wt8FjK.png'
      }
      bubble.hero.action.uri = 'https://www.ph84.idv.tw' + $(this).find('a').attr('href')
      bubble.body.contents[0].text = $(this).find('.articlePreview-title').text().trim()
      bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.bbWrapper').text().trim().replace(/^(\r\n|\n|\r|\t| )+/gm, '').slice(0, 26) || '暫無資料'
      // bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.bbWrapper').text().trim().replace(/^(\r\n|\n|\r|\t| )+/gm, '')
      fishTank.push(bubble)
    })

    // $('.articlePreview-image').each(function () {
    //   console.log($(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1'))
    //   })

    const replies = _.chunk(fishTank, 12).map(fishTank => {
      return {
        type: 'flex',
        altText: '魚缸分享查詢結果',
        contents: {
          type: 'carousel',
          contents: fishTank
        }
      }
    })

    await event.reply(replies)
    if (process.env.WRITEJSON) {
      for (const i in replies) {
        writejson(replies[i], `fishTank${i}`)
      }
    }
  } catch (error) {
    console.log(error)
    console.error('請稍後再試')
  }
}
