
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
                '**/App.js',
                '**/GenericGui.js',
                '**/Image.js',
                '**/Feed.js',
                '**/Card.js',
                '**/Form.js',
                
            ],
    sections: [
    {
        name: 'VIEWS',
        components: 'src/view/**/*.js'
    },
    {
        name: 'GUI',
        components: 'src/gui/**/*.js'
    }
    ]
};