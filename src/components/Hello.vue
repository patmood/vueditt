<template>
  <div class="flex">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'hello',
  components: {
    'sidebar': Sidebar,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
