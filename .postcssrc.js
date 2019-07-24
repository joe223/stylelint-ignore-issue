// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path')

const ignorePath = path.resolve(__dirname, '.stylelintignore')


module.exports = {
    plugins: [
        require('stylelint')({
            ignorePath // It also doesn't work
        })
    ]
}
