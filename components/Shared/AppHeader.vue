<template>
  <header>
    <ul>
      <li v-if="loadTime > 0">
        {{ $t('page_loaded', {time: loadTime}) }}
      </li>
      <li>
        <dark-mode-switcher />
      </li>
      <li>
        <locale-switcher />
      </li>
    </ul>
  </header>
</template>

<script>
  import DarkModeSwitcher from '@/components/UI/DarkModeSwitcher'
  import LocaleSwitcher from '@/components/UI/LocaleSwitcher'

  export default {
    name: 'AppHeader',
    components: {
      LocaleSwitcher,
      DarkModeSwitcher
    },
    data: () => ({
      loadTime: 0
    }),
    mounted() {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}
          const timing = performance.getEntriesByType('navigation')[0]
          this.loadTime = (Math.round(timing.domComplete) / 1000).toFixed(2)
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
</style>
