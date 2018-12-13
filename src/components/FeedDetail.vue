<template>
  <v-card class="card" flat>
    <v-card-title>
      <user-avatar :user="post.user"></user-avatar>
      <span class="title">{{ post.user.fullName }}</span>
    </v-card-title>
    <v-card-text class="headline text">{{ post.title }}</v-card-text>
    <v-card-text class="text">{{ post.description }}</v-card-text>
  </v-card>
</template>
<script>
import UserAvatar from "@/components/UserAvatar";

export default {
  components: {
    UserAvatar
  },
  name: "FeedDetail",
  props: ["post"]
};
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 16px;
}

.text {
  padding-top: 0;
}

.title {
  margin-left: 6px;
}
</style>
