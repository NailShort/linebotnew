export default (event) => {
  event.reply({
    type: 'text',
    text: '您對甚麼魚感興趣呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2970/2970082.png ',
          action: {
            type: 'message',
            label: '小丑魚',
            text: '小丑魚'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/2970/2970068.png ',
          action: {
            type: 'message',
            label: '小神仙',
            text: '小神仙'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/6256/6256178.png ',
          action: {
            type: 'message',
            label: '大神仙',
            text: '大神仙'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/7430/7430031.png',
          action: {
            type: 'message',
            label: '箱魨魚',
            text: '箱魨魚'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1867/1867506.png',
          action: {
            type: 'message',
            label: '砲彈魚',
            text: '砲彈魚'
          }
        }
      ]
    }
  })
}
