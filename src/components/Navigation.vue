<template>
  <nav id="nav">
    <v-toolbar app color="primary">
      <v-toolbar-title>
        <router-link to="/">
          <span class="headline">ArtSe</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Signin/>
    </v-toolbar>

    <v-bottom-nav app :value="true" color="white" class="bottom-nav" v-if="isUserLoggedIn">
      <v-btn color="secondary" flat value="home" to="/">
        <span>Feed</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn color="secondary" flat value="search" to="/search">
        <span>Busca</span>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn color="secondary" flat value="messages" to="/profile">
        <span>Perfil</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </nav>
</template>

<script>
import Signin from "@/components/Signin";

export default {
  components: {
    Signin
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.isUserLoggedIn;
    }
  },
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
span.headline {
  color: white;
}
</style>
