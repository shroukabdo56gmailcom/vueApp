<template>
  <div>
<parentComp></parentComp>
  </div>
</template>

<script>
import parentComp from './components/parent.vue';
export default {
  name: "App",
  components: {
    parentComp
  },
  data() {
    return {
     
    };
  },
};
</script>

<style>
</style>
