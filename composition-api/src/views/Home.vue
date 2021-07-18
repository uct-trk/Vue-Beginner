<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p>My name is {{ninjaOne.name}} and {{ninjaOne.age}} years old</p>
    <button @click="updateNinjaOne">Click</button>
    <button @click="ninjaOne.age++">add 1 to age</button>
    <input type="text" v-model="ninjaOne.name">
    <h2>Reactive</h2>
    <p>{{ninjaTwo.name}} - {{ninjaTwo.age}}</p>
    <button @click="updateNinjaTwo">Update NinjaTwo</button> -->
    <!-- <p>{{name}}</p> -->
    <input type="text" v-model="search">
    <p>{{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import {computed, ref, watch, watchEffect} from 'vue'

export default {
  name: 'Home',
  setup(){
    /* const name = ref('mario')
    const age = ref(30) */

    /* const ninjaOne = ref({name : "Alex", age: 40})
    const ninjaTwo = reactive({name: "Luigi", age: 35})

    const updateNinjaOne = () => {
      ninjaOne.value.age = 50
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 70
      ninjaTwo.name = "Datome"
    } */

    /* const p = ref(null) */

    /* const handleClick = () => {
      /* console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'Hello Ugurcan'
      name.value = 'ugurcan'
      age.value = 26
    } */

    const search = ref('')
    const names = ref(["ali", "mehmet", "ugur", "huseyın", "fatma", "esra"])

    const stopWatch = watch(search, () => {
      console.log("work")
    })

    const stopEffect = watchEffect(() => {
      console.log("watch effect work", search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
   /*  const name = computed(() => {
      return 'shaun'
    }) */

    return {
      /* handleClick,
      updateNinjaOne,
      ninjaOne,
      ninjaTwo,
      updateNinjaTwo */
      /* name, */
      names,
      search,
      matchingNames,
      handleClick
    }
  }
}
</script>

<style>
  .test{
    background: brown;
  }
</style>