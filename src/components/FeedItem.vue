<template>
  <v-list-tile avatar class="tile">
    <v-list-tile-avatar>
      <user-avatar :user="post.user"></user-avatar>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{ post.title }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ post.description }}</v-list-tile-sub-title>
      <div>
        <v-icon small>attachment</v-icon>
        <span class="caption">{{ post.archives.length }}</span>
      </div>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script>
import UserAvatar from "@/components/UserAvatar";

export default {
  components: {
    UserAvatar
  },
  name: "FeedItem",
  props: ["post"]
};
</script>
<style lang="scss" scoped>
.caption {
  margin-left: 4px;
}

.tile {
  margin-top: 16px;
}
</style>
