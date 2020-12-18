<template>
  <div class="container">
    <app-header />

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
    },
    head() {
      return {
        htmlAttrs: {
          lang: this.locale,
          dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
        }
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 1.5rem;
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
</style>
