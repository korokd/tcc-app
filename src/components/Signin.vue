<template>
  <v-btn @click="logUserOut" v-if="isUserLoggedIn">Sair</v-btn>
  <v-dialog v-model="dialog" width="500" v-else>
    <v-btn slot="activator" color="white">Entrar</v-btn>
    <Access @close-dialog="closeDialog"/>
  </v-dialog>
</template>
<script>
import Access from "@/components/Access";

export default {
  components: {
    Access
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.isUserLoggedIn;
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    logUserOut() {
      this.$store.dispatch("logUserOut");
      this.$router.push("home");
    },
    closeDialog() {
      this.dialog = false;
    }
  },
  name: "Signin"
};
</script>
<style lang="scss" scoped>
</style>
