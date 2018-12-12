<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-text-field
          append-outer-icon="search"
          clearable
          @click:append-outer="onSearch"
          @click:clear="onClear"
          @input="onSearch"
          placeholder="Busca"
          single-line
          v-model="query"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-list two-line>
      <template v-for="user in this.users">
        <v-list-tile avatar :key="user.id">
          <v-list-tile-avatar>
            <user-avatar :user="user"></user-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.fullName }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-container>
</template>
<script>
import UserAvatar from "@/components/UserAvatar";

import { getConnections, getUsers } from "@/service";

const updateUserList = (instance, query) => {
  Promise.all([getUsers(), getConnections(instance.$store.state.user)]).then(
    ([users, connections]) => {
      const userIds = [
        ...new Set(
          connections.map(
            c => (c.user1 === instance.$store.state.user.id ? c.user2 : c.user1)
          )
        )
      ];

      const filter = query
        ? ({ fullName }) => fullName.toLowerCase().includes(query.toLowerCase())
        : ({ id }) => userIds.includes(id);

      const filteredUsers = users.filter(filter);

      instance.users = filteredUsers;
    }
  );
};

export default {
  components: {
    UserAvatar
  },
  created() {
    if (!this.$store.state.isUserLoggedIn) {
      return this.$router.push("home");
    }

    updateUserList(this);
  },
  data: () => ({
    users: [],
    query: ""
  }),
  methods: {
    onClear() {
      updateUserList(this);
    },
    onSearch() {
      updateUserList(this, this.query);
    }
  },
  name: "Connections"
};
</script>
<style lang="scss" scoped>
</style>
