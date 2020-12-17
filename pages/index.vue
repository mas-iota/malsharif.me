<template>
  <div class="container">
    <header style="height: 100px;">
      <app-header />
      <ul>
        <li>Switch dark and light mode</li>
        <li>Switch Lang</li>
      </ul>
    </header>
    <main>
      <div class="intro">
        <h2>Hello</h2>
        <p>My name is Mahmoud AlSharif, I'm a Web Developer with a passion for new technologies and clean code. <br > I specialize in web programming and scripting, especially Javascript. I build beautiful, high performance, and easily maintained web apps.</p>
        <p>I use the following technologies on a daily basis: Vuejs, NuxtJS, SASS, Webpack, Nodejs, Express and Fastify </p>
        <p>Away from the keyboard, I go to the GYM or play with the cats, sometimes I cook and sometimes I write</p>
      </div>
    </main>
<!--    <footer>Footer</footer>-->
  </div>
</template>

<script>
  import AppHeader from '@/components/Shared/AppHeader'
  export default {
    components: {
      AppHeader
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 1.5rem;
  }

  header ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }

  header ul li {
    list-style-type: none;
    padding: 10px;
    outline: 1px solid black;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    outline: 1px solid black;
    padding: 5rem 2rem;
  }

  footer {
    padding: 10px;
  }

  @media only screen and (max-width: 600px) {
    header ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 0;
      padding: 0;
    }
  }

</style>
