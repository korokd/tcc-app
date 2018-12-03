<template>
  <v-app>
    <v-content>
      <Navigation/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss" scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
