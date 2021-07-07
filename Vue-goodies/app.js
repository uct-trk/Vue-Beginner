window.addEventListener("load", () => {

    new Vue({
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


    setTimeout(() => {
        new Vue({
            el: "#vcloak",
            data() {
                return {
                    users: [{ name: "Fatih" }, { name: "Ali" }]
                }
            },
        })
    }, 3000)

    Vue.component("v-select", {
        template: `
        <select>
            <slot></slot>
        </select>
        `
    })

    Vue.component("v-option", {
        props: ["value"],
        template: `
        <option>{{value}}</option>
        `
    })

    new Vue({
        el: "#slots"
    })

    new Vue({
        el: "#nextTick",
        data() {
            return {
                message: "Hello"
            }
        },
        methods: {
            change() {
                this.message = "Hello world"
                console.log(document.querySelector("#nextTick").innerText)

                this.$nextTick(() => {
                    console.log(document.querySelector("#nextTick").innerText)
                })
            }
        },
    })

    new Vue({
        el: "#modifiers",
        methods: {
            log(){
                console.log("Fooo")
            }
        },
    })

    new Vue({
        el: "#filters",
        data() {
            return {
                name: "logitech camera",
                price: 25
            }
        },
        filters: {
            uppercase(text){
                return text.toUpperCase();
            },
            withTax(price){
                return `${(price * 1.18).toFixed(2)} TL`
            }
        }
    })
})


