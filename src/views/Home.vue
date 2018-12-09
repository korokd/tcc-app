<template>
  <Landing v-if="!isUserLoggedIn"></Landing>
  <Feed v-else></Feed>
</template>
<script>
import Feed from "@/components/Feed";
import Landing from "@/components/Landing";

export default {
  components: {
    Feed,
    Landing
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.isUserLoggedIn;
    }
  },
  name: "Home"
};
</script>
<style lang="scss" scoped>
</style>
