<template>
  <div>
    <header>
      <router-link to="/">
        <h1><span>UCT</span>Movies</h1>
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  ::selection{
    background: transparentize(#42B883, 0.5);
  }

  body{
    background-color: #35495E;
  }

  a{
    text-decoration: none;
  }

  header{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #2C3D4E;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  }

  header h1{
    color: #FFF;
    font-size: 28px;
  }
  header span{
    color: #42B883;
  }
</style>
