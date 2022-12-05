export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl',
        color: '#ffffff'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#b3d7f2',
                size: 'sm'
              }
            ]
          }
        ]
      }
    ],
    background: {
      type: 'linearGradient',
      angle: '0deg',
      startColor: '#000000',
      endColor: '#076eba'
    }
  }
}
