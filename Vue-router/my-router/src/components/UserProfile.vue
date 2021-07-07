<template>
    <div>
    <a @click="goBack">Go back to user list</a>
        <h1>{{userData.name}}</h1>
        <p>{{userData.phone}}</p>
        <p>{{userData.email}}</p>
        <router-link :to="postLink">Posts</router-link>  
        <router-link :to="nextUserLink">Next user</router-link>  
    </div>
</template>

<script>
export default {
    name: "UserProfile",
    data() {
        return {
            userData: {}
        }
    },
    methods: {
        fetchData(){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        .then((res) => {return res.json()})
        .then((data) => this.userData = data)
        },
        goBack(){
            return this.$router.push("/")
            // bu şekilde isim verip de yönlendirme yapailiyoruz
            // return this.$router.push({name: "home"})
        }
    },
    watch: {
        // route değiştiğinde fetchdata çalışacak
        '$route': 'fetchData'
    },
    computed: {
        postLink(){
            return `/user/${this.$route.params.id}/posts`
        },
        nextUserLink(){
            return `/user/${parseInt(this.$route.params.id, 10) + 1}`
        },
        
    },
    created() {
        this.fetchData()
    },
}
</script>