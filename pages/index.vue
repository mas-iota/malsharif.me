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
      <div>
        <p>Connect with me: </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/m-alsharif/" target="_blank">
              <Icon
                :name="'linkedin'"
                :icon="getIcon('linkedin')"
                :size="'is-medium'"
              />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/12634779/mas" target="_blank">
              <Icon
                :name="'stackoverflow'"
                :icon="getIcon('stackoverflow')"
                :size="'is-medium'"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/mas-iota" target="_blank">
              <Icon
                :name="'github'"
                :icon="getIcon('github')"
                :size="'is-medium'"
              />
            </a>
          </li>
          <lI>
            <a href="mailto:mahmoud.k.alsharif@gmail.com">
              <Icon
                :name="'email'"
                :icon="getIcon('email')"
                :size="'is-medium'"
              />
            </a>
          </li>
        </ul>
      </div>
    </main>
      <footer>Powered by: Mark Knopfler <b>OBE</b></footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/Shared/AppHeader'
  import Icon from '@/components/UI/Icon'
  import { getIcon } from '@/utils'

  export default {
    components: {
      AppHeader,
      Icon
    },
    methods: {
      getIcon
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
    margin-bottom: 2rem;
  }

  footer {
    padding: 10px;
  }

  ul {
    display: flex;

    li {
      margin-right: 20px;
    }
  }

</style>
