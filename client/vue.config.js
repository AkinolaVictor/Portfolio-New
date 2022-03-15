// const {PORT} = require('../config')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/styles/base.scss";
                `
            }
        }
    },
    configureWebpack:{
        devServer: {
            proxy: {
                '^/api': {
                    target: "http://localhost:3000"
                }
            },
            // proxy: `http://localhost:3000`
        }
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