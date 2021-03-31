let vueInstance  = new Vue({
    el: '#vue-app',
    data: {
        message: 'hello students!'
    }
});
// the above solution create a global vue instance
// if you do (()=>{
//let vueInstance = new Vue({
//     el: '#vue-app',
//     data: {
//         message: 'hello students!'
//     }
// });
// })();
// this will hide the vue instance into a javascript anon function