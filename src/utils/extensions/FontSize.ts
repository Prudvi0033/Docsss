import { Extension } from '@tiptap/core'

const FontSize = Extension.create({
  name: 'fontSize',

  addGlobalAttributes() {
    return [
      {
        types: ['textStyle'],
        attributes: {
          fontSize: {
            default: null,
            renderHTML: attributes => {
              if (!attributes.fontSize) {
                return {}
              }

              return {
                style: `font-size: ${attributes.fontSize}`,
              }
            },
            parseHTML: element => ({
              fontSize: element.style.fontSize,
            }),
          },
        },
      },
    ]
  },
})

export default FontSize
