<template>
  <v-container>
    <v-subheader class="headline">Feed</v-subheader>
    <v-list subheader>
      <feed-detail :post="post" v-for="post in feedItems" :key="`${post.id}`"></feed-detail>
    </v-list>
    <v-btn fixed dark fab bottom right color="primary" class="action-button">
      <v-dialog v-model="dialog">
        <v-icon slot="activator">add</v-icon>
        <publish-post @close-dialog="closeDialog"></publish-post>
      </v-dialog>
    </v-btn>
  </v-container>
</template>
<script>
import FeedDetail from "@/components/FeedDetail";
import PublishPost from "@/components/PublishPost";
import { getConnections, getPosts } from "@/service";

const updatePosts = instance =>
  Promise.all([getConnections(instance.$store.state.user), getPosts()]).then(
    ([connections, posts]) =>
      (instance.feedItems = posts.filter(p =>
        [instance.$store.state.user.id, ...connections].includes(p.user.id)
      ))
  );

export default {
  components: {
    FeedDetail,
    PublishPost
  },
  created() {
    updatePosts(this);
  },
  data: () => ({
    dialog: false,
    feedItems: []
  }),
  methods: {
    closeDialog() {
      this.dialog = false;
      updatePosts(this);
    },
    formatUserRef({ user }) {
      return `${user.fullName} <${user.type}>`;
    }
  },
  name: "Feed"
};
</script>
<style lang="scss" scoped>
.action-button {
  bottom: 64px;
}
</style>
