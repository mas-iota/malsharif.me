<template>
  <div class="container">
    <app-header />

    <main>
      <div class="intro">
        <h2>{{ $t('hello') }}</h2>
        <p>{{ $t('intro_p_1') }}</p>
        <p>{{ $t('intro_p_2') }}</p>
        <p>{{ $t('intro_p_3') }}</p>
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

<style scoped lang="scss">
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem 2rem;
  }

  .intro {
    max-width: 700px;
  }

  footer {
    padding: 10px;
  }
</style>
