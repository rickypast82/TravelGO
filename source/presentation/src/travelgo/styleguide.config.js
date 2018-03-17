
const path = require('path');
module.exports = {
    require: [
        path.join(__dirname, './src/css/semantic.min.css')
    ],
    ignore: [
                '**/test/**/*.*',
                '**/types.js', 
                '**/index.js',
                '**/utils.js', 
                '**/constants.js', 
                '**/containers/**/*.*',
                '**/AppCommon.js',
                '**/AppStAmpe.js',
            ],
    sections: [
    {
        name: 'VIEWS',
        components: 'src/view/**/*.js'
    }
    ]
};