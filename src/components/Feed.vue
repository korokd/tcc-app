<template>
  <v-container>
    <v-subheader class="headline">Feed</v-subheader>
    <v-list subheader>
      <feed-detail
        :post="post"
        v-for="post in feedItems"
        :key="`${post.title}/${post.description}`"
      ></feed-detail>
    </v-list>
  </v-container>
</template>
<script>
import FeedDetail from "@/components/FeedDetail";

import { feedItems } from "@/Fakes";

export default {
  components: {
    FeedDetail
  },
  data: () => ({
    feedItems
  }),
  methods: {
    formatUserRef({ user }) {
      return `${user.fullName} <${user.type}>`;
    }
  },
  name: "Feed"
};
</script>
<style lang="scss" scoped>
</style>
