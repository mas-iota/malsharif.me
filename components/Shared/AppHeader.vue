<template>
  <header>
    <ul>
      <li>Switch dark and light mode</li>
      <li>Page loaded in {{ loadTime }}ms</li>
      <li><dark-mode-switcher /></li>
    </ul>
  </header>
</template>

<script>
  import DarkModeSwitcher from '@/components/UI/DarkModeSwitcher'
  export default {
    name: 'AppHeader',
    components: { DarkModeSwitcher },
    data: () => ({
      loadTime: 0
    }),
    mounted() {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}
          const timing = performance.getEntriesByType('navigation')[0]
          this.loadTime = Math.round(timing.domComplete)
        }, 0)
      })
    }
  }
</script>

<style scoped lang="scss">
  header {
    display: flex;
    justify-content: flex-end;
    padding: 30px;
  }

  header ul {
    display: flex;
    justify-content: space-evenly;
  }

  header ul li {
    list-style-type: none;
    padding: 10px;
  }

  @media only screen and (max-width: 600px) {
    header ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
</style>
