<template>
  <label :class="{ 'dark-mode-switcher': true, 'in-progress': throttling }">
    <input v-model="active" :disabled="throttling" type="checkbox" @change="userToggleDarkMode">
    <span class="main-body" />
    <span class="shadow">
      <span />
    </span>
    <span class="sunray sunray--1">
      <span />
    </span>
    <span class="sunray sunray--2">
      <span />
    </span>
    <span class="sunray sunray--3">
      <span />
    </span>
    <span class="sunray sunray--4">
      <span />
    </span>
    <span class="sunray sunray--5">
      <span />
    </span>
    <span class="sunray sunray--6">
      <span />
    </span>
  </label>
</template>

<script>
  import { Cookies } from '@/utils'

  export default {
    name: 'DarkModeSwitcher',
    data: () => ({
      active: false,
      throttling: false
    }),
    created() {
      if (process.browser) {
        const theme = Cookies.getItem('site-theme')

        if (theme) {
          this.active = theme === 'dark'
          this.toggleDarkMode()
        } else {
          this.setCookie()
        }
      }
    },
    methods: {
      toggleDarkMode() {
        const el = document.body
        if (this.active) {
          el.classList.add('is-dark')
        } else {
          el.classList.remove('is-dark')
        }
      },
      userToggleDarkMode() {
        this.toggleDarkMode()
        this.setCookie()
        this.throttleSwitcher()
      },
      throttleSwitcher() {
        this.throttling = true
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.throttling = false, 750)
      },
      setCookie() {
        const value = this.active ? 'dark' : 'light'
        Cookies.setItem('site-theme', value, { expire: 365, secure: this.$config.secure })
      }
    }
  }
</script>

<style scoped lang="scss">
  $animation-duration: 300ms;

  span {
    display: block;
  }

  .dark-mode-switcher {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: background $animation-duration ease-in-out;
    background-color: white;
  }

  .dark-mode-switcher.in-progress {
    cursor: not-allowed;
  }

  body.is-dark .dark-mode-switcher,
  body.is-dark .shadow > span {
    background-color: #0d1f2b;
  }
  body.is-dark .main-body {
    background-color: #e2e8f0;
  }

  .shadow > span {
    transition: $animation-duration ease-in-out;
    transition-property: background, transform;
  }

  .dark-mode-switcher:hover .main-body {
    background-color: #00cd81;
    transition-duration: .3s;
    transition-property: color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
  }

  .main-body {
    position: relative;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background-color: #2f3540;
  }

  .shadow {
    box-sizing: content-box;
    position: absolute;
    width: 50%;
    height: 50%;
    padding-bottom: 150%;
    transform: rotate(50deg);

    span {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: white;
    }
  }

  .dark-mode-switcher:hover .sunray span {
    background-color: #00cd81;
    transition-duration: .3s;
    transition-property: color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
  }

  .sunray {
    position: absolute;
    width: 10%;
    height: 80%;
    padding-bottom: 60%;

    span {
      width: 100%;
      height: 100%;
      border-radius: 5rem;
      background-color: #2f3540;
      transition: $animation-duration ease-in-out;
      transition-property: transform, opacity;
    }

    &--2 {
      transform: rotate(60deg);
    }

    &--3 {
      transform: rotate(120deg);

    }

    &--4 {
      transform: rotate(180deg);

    }

    &--5 {
      transform: rotate(240deg);

    }

    &--6 {
      transform: rotate(300deg);

    }
  }

  input {
    top: 0;
    left: 0;
    position: absolute;
    display: none;

    &:checked ~ .main-body {
      transform: scale(2);
    }

    &:checked ~ .shadow > span {
      transform: translate(0, 100%);
    }

    &:checked ~ .sunray > span {
      transform: translate(0, -100%);
      opacity: 0;
    }
  }
</style>
