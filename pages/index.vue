<template>
  <div class="container">
    <app-header />

    <main>
      <section class="intro landing-section">
        <h2 class="mb-3 is-size-2">
          {{ $t('hello') }}
        </h2>
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
      </section>

      <section class="projects landing-section">
        <h2 class="is-capitalized is-size-4 mb-3 is-bold">
          {{ $t('selected_projects') }}
        </h2>
        <a href="https://farahway.jetorder.com" target="_blank" class="is-undecorated">
          <div class="project-media">
            <figure>
              <img src="/jetorder-logo.png" alt="project-logo">
            </figure>
            <div>
              <h2 class="is-bold is-size-6">
                {{ $t('jetorder.title') }}
              </h2>
              <p>
                {{ $t('jetorder.description') }}
              </p>
            </div>
          </div>
        </a>
      </section>

      <section class="landing-section">
        <h2 class="is-capitalized is-size-4 mb-3 is-bold">
          {{ $t('writings') }}
        </h2>
        <p>{{ $t('blog_note') }}</p>
      </section>

      <section class="landing-section">
        <h2 class="is-capitalized is-size-4 mb-3 is-bold">
          {{ $t('my_resume') }}
        </h2>
        <i18n path="view_resume" tag="p">
          <a href="/docs/malsharif201911muse.pdf" class="is-undecorated is-bold is-link" target="_blank">{{ $t('here') }}</a>
        </i18n>
      </section>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from '@/components/Shared/AppHeader'
  import Icon from '@/components/UI/Icon'
  import { getIcon } from '@/utils'
  import AppFooter from '../components/Shared/AppFooter'

  export default {
    components: {
      AppFooter,
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
  .projects a {
    color: inherit;
  }

  .projects a:visited {
    color:unset;
  }

  .project-media {
    transition-property: border-color, box-shadow;
    transition-duration: .3s;
  }

  .project-media p {
    text-align: justify;
    line-height: 1.25;
  }

  .project-media {
    padding: 1rem 2rem;
    display: flex;
    border-radius: .25rem;
    border: 1px solid #e2e8f0;
    align-items: center;
  }

  .project-media h2 {
    line-height: 1.75rem;
  }

  .project-media figure {
    max-width: 32px;
  }

  html[dir=rtl] .project-media figure {
    margin-left: 1.5rem;
  }

  html[dir=ltr] .project-media figure {
    margin-right: 1.5rem;
  }

  body.is-dark .project-media {
    border-color: #2d3748;
  }

  .project-media:hover {
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  }

  .intro p {
    font-size: 1.2rem;

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
    margin-bottom: 6rem;
  }

  .landing-section {
    max-width: 700px;
    margin-bottom: 5rem;
  }

  body.is-dark ul.contact-links li .icon {
    color: #e2e8f0;
  }

  ul.contact-links {
    display: flex;
    margin-top: 3rem;
    li {
      .icon {
        color: #2f3540;
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
    margin-right: -3px;
  }

  html[dir=ltr] .intro li:first-child {
    margin-left: -3px;
  }

  @media (max-width: 768px) {
    .contact-links {
      justify-content: center;
    }

    .project-media p {
      text-align: unset;
    }
  }

  @media (min-width: 768px) {
    .intro p {
      text-align: justify;
    }
  }
</style>
