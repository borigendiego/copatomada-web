// schemas/home.js
export default {
    name: 'home',
    type: 'document',
    title: 'Home page',
    fields: [
      {
        name: 'bannerTitle',
        type: 'string',
        title: 'Banner title'
      },
      {
        title: 'Poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      }
    ]
  }