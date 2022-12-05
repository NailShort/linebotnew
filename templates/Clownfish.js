export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '1:1',
        gravity: 'center',
        action: {
          type: 'uri',
          label: 'action',
          uri: 'http://linecorp.com/'
        }
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        position: 'absolute',
        background: {
          type: 'linearGradient',
          angle: '0deg',
          endColor: '#00000000',
          startColor: '#000000'
        },
        width: '100%',
        height: '40%',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px'
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: '123',
                    size: 'xl',
                    color: '#ffffff'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: '¥62,000',
                        color: '#ffffff',
                        size: 'md',
                        flex: 0,
                        align: 'center'
                      }
                    ],
                    flex: 0,
                    spacing: 'lg'
                  }
                ]
              }
            ],
            spacing: 'xs'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '20px'
      }
    ],
    paddingAll: '0px'
  }
}
