const { src, dest } = require("gulp");
const uglifyJs = require("gulp-uglify");

function build() {
    return src("src/*.js")
        .pipe(uglifyJs({
            mangle: false,
            compress: false,
            output: {
                comments: false,
                beautify: true
            }
        }))
        .pipe(dest("dist/"))
}

exports.default = build;