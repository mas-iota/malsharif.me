<template>
  <nuxt-link
    v-if="$i18n.locale === 'en'"
    :to="switchLocalePath('ar')"
  >
    <Icon
      :name="'arabic'"
      :icon="getIcon('arabic')"
      :size="'is-medium'"
    />
  </nuxt-link>
  <nuxt-link
    v-else
    :to="switchLocalePath('en')"
  >
    <Icon
      :name="'alphabet'"
      :icon="getIcon('alphabet')"
      :size="'is-medium'"
    />
  </nuxt-link>
</template>

<script>
  import Icon from '@/components/UI/Icon'
  import { getIcon } from '@/utils'

  export default {
    name: 'LocaleSwitcher',
    components: {
      Icon
    },
    methods: {
      getIcon
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #4a5568;
  }

  body.is-dark a {
    color: #e2e8f0;
  }
  a:hover {
    color: #00cd81 !important;
    transition-duration: .15s;
    transition-property: color;
  }
</style>
