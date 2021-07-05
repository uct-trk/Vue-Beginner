window.addEventListener("load", () => {
    new Vue({
        el: "#app",
        name: "Cart",
        data: {
            isLoading: true,
            cart: [],
            saved: []
        },
        methods: {
            removeFromCart(index) {
                console.log(index);
                this.cart.splice(index, 1);
            },
            removeFromSaved(index) {
                console.log(index);
                this.saved.splice(index, 1);
            },
            saveForLater(index) {
                console.log(`saved ${index}`)
                const item = this.cart.splice(index, 1);
                this.saved.push(item[0]);
            },
            moveToCart(index) {
                console.log(`moved ${index}`)
                const item = this.saved.splice(index, 1);
                this.cart.push(item[0]);
            },
        },
        computed: {
            cartTotal() {
                let total = 0;
                this.cart.forEach((item) => {
                    total += parseFloat(item.price, 10); 
                })
                return total.toFixed(2);
            }
        },
        created() {
            fetch("./data.json")
                .then((res) => { return res.json() })
                .then((res) => {
                    this.isLoading = false;
                    this.cart = res.cart
                    this.saved = res.saved
                })
        },
    })
})

