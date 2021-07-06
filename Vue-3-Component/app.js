

Vue.component("hello", {
    template: `
    <h1 v-on:click="sayHello">Hello Component</h1>
    `,
    methods: {
        sayHello() {
            console.log("Hello World")
        }
    }
})

new Vue({
    el: "#app",
})