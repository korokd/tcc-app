<template>
  <img :src="user.profilePhoto" v-if="user.profilePhoto">
  <avatar :color="randomColor()" :fullname="getAlt(user)" :size="40" v-else></avatar>
</template>
<script>
import Avatar from "vue-avatar-component";

export default {
  components: {
    Avatar
  },
  methods: {
    getAlt({ fullName }) {
      const splitName = fullName.split(" ");
      const firstName = splitName[0];
      const lastName = splitName[splitName.length - 1];

      return `${firstName} ${lastName}`;
    },
    randomColor() {
      const colors = [
        "darkred",
        "darkolivegreen",
        "cadetblue",
        "darkslategrey",
        "black"
      ];
      const r = Math.floor(Math.random() * (5 - 0)) + 0;
      return colors[r];
    }
  },
  name: "UserAvatar",
  props: ["user"]
};
</script>
