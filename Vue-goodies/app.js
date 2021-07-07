window.addEventListener("load", () => {

    window.vue = new Vue({
        el: "#vmodel",
        data: {
            message: "Hello world",
            selectedVal: "foo",
            isSelected: true
        },
        methods: {
            log() {
                console.log(`"${this.message}"`)
            },
            setValue() {
                this.message = "World world"
            },
            setSelect() {
                this.selectedVal = "baz"
            }
        },
    })
})


