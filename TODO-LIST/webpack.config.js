const path = require("path");

module.exports = {
    entry: "./scripts/components/ToDoList.tsx",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist")
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
}
