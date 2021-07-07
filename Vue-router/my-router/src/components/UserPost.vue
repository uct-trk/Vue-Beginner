<template>
    <div>
    <router-link :to="userLink">Back to user</router-link>
        <div v-for="(post, index) in posts" :key="index">
            <h4>{{post.title}}</h4>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserPost",
    data() {
        return {
            posts: {}
        }
    },
    computed: {
        userLink(){
            return `/user/${this.$route.params.userId}`
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
        .then((res) => {return res.json()})
        .then((data) => this.posts = data)
    },
}
</script>