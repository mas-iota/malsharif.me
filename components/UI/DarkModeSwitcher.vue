<template>
  <label class="dark-mode-switcher">
    <input v-model="active" type="checkbox" @change="toggleDarkModeAndSetCookie">
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
      active: false
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
      toggleDarkModeAndSetCookie() {
        this.toggleDarkMode()
        this.setCookie()
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

  body.is-dark .dark-mode-switcher,
  body.is-dark .shadow > span {
    background-color: black;
  }
  body.is-dark .main-body {
    background-color: white;
  }

  .main-body,
  .shadow > span {
    transition: $animation-duration ease-in-out;
    transition-property: background, transform;
  }

  .main-body {
    position: relative;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background-color: black;
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

  .sunray {
    position: absolute;
    width: 10%;
    height: 80%;
    padding-bottom: 60%;

    span {
      width: 100%;
      height: 100%;
      border-radius: 5rem;
      background-color: black;
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
