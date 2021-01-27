<template>
  <span class="icon ease-in-out" :class="size">
    <svg :viewBox="icon.viewBox">
      <title>{{ name }}</title>
      <path
        v-for="(path, i) in icon.paths"
        :key="`${name}-path-${i}`"
        :d="path.d"
        :style="path.style"
      />
    </svg>
  </span>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      icon: {
        type: Object,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: 'is-medium'
      }
    }
  }
</script>

<style scoped>
  .icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: inherit;
  }
  .icon svg {
    background-color: transparent;
    fill: currentColor;
    stroke-width: 0;
    stroke: currentColor;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
  .icon.is-small {
    height: 1rem;
    width: 1rem;
  }
  .icon.is-medium {
    height: 2rem;
    width: 2rem;
  }
  .icon.is-large {
    height: 3rem;
    width: 3rem;
  }
</style>
