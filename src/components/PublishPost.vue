<template>
  <v-card>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="title" :rules="rules" label="Título" required autofocus></v-text-field>
        <v-textarea v-model="description" :rules="rules" label="Conteúdo" required></v-textarea>
      </v-form>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="send">Postar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { createPost } from "@/service";

export default {
  data: () => ({
    valid: false,
    title: "",
    description: "",
    rules: [v => !!v || "Campo obrigatório"]
  }),
  methods: {
    send() {
      let payload = {
        title: this.title,
        description: this.description,
        user: this.$store.state.user.id
      };

      if (this.$refs.form.validate()) {
        createPost(payload).then(() => this.$emit("close-dialog"));
      }
    }
  },
  name: "PublishPost"
};
</script>
<style lang="scss" scoped>
span {
  color: black;
  cursor: pointer;
}
</style>
