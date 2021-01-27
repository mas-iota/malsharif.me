<template>
  <div class="container">
    <app-header />

    <main>
      <div class="intro">
        <h2>{{ $t('hello') }}</h2>
        <p>{{ $t('intro_p_1') }}</p>
        <p>{{ $t('intro_p_2') }}</p>
        <p>{{ $t('intro_p_3') }}</p>
        <ul class="contact-links">
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
          <li>
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

  body.is-dark ul.contact-links li .icon {
    color: #e2e8f0;
  }

  ul.contact-links {
    display: flex;
    margin-top: 3rem;
    li {
      .icon {
        color: #4a5568;
      }
      .icon:hover {
        color: #00cd81 !important;
        transition-duration: .15s;
        transition-property: color;
      }
    }
  }

  html[dir=rtl] .intro li {
    margin-left: 20px;
  }

  html[dir=ltr] .intro li {
    margin-right: 20px;
  }

  html[dir=rtl] .intro li:first-child {
    margin-right: -4px;
  }

  html[dir=ltr] .intro li:first-child {
    margin-left: -4px;
  }
</style>
