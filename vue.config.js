// vue.config.js
module.exports = {

    pages: {
        // This is our main page which refers to the main Javascript file
        index: "src/main.js", 
        // Next, we list all other pages in the application, 
        // and let all of them refer to the main Javascript file as well.
        other_page: "src/views/signin.vue",
      },
    // options...
    devServer: {
        disableHostCheck: true
    }
}
