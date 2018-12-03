<template>
<div id="id">
  <v-toolbar app color="primary">
    <v-toolbar-title>
      <router-link to="/">
        <span class="headline">ArtSe</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <Signin/>
  </v-toolbar>

  <v-bottom-nav app :value="true" color="white" class="bottom-nav">
    <v-btn color="secondary" flat value="home" to="/">
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn color="secondary" flat value="search" to="/search">
      <span>Search</span>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn color="secondary" flat value="messages" to="/messages">
      <span>Messages</span>
      <v-icon>messages</v-icon>
    </v-btn>
  </v-bottom-nav>
</div>
</template>

<script>
import Signin from "@/components/Signin";

export default {
  components: {
    Signin
  },
  data: () => ({}),
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
span.headline {
  color: white;
}
</style>
