export default (event) => {
  event.reply({
    type: 'text',
    text: '您對甚麼魚感興趣呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://www.cmfish.com/kinds/fish_l/144.jpg',
          action: {
            type: 'message',
            label: '公子小丑',
            text: '公子小丑'
          }
        }
      ]
    }
  })
}
