const port = require('../config')
const path = require('path')

module.exports = {
    outputDir:path.resolve(__dirname, '../public'),
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/styles/base.scss";
                `
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: `http://localhost:${port}`
            }
        },
    }
}

// module.exports = {
//     css: {
//       loaderOptions: {
//         sass: {
//           data: `
//             @import "@/scss/_variables.scss";
//             @import "@/scss/_mixins.scss";
//           `
//         }
//       }
//     }
//   };