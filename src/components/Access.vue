<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="email" :rules="rules.email" label="Email" required autofocus></v-text-field>
        <v-text-field
          v-model="fullName"
          :rules="rules.name"
          label="Nome completo"
          required
          v-if="!isRegistered"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="rules.password"
          label="Senha"
          required
          type="password"
        ></v-text-field>
      </v-form>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="send">{{ buttonText }}</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-actions>
      <v-spacer></v-spacer>
      <span @click="isRegistered = !isRegistered">{{ secondaryText }}</span>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  computed: {
    title() {
      return this.isRegistered ? "Login" : "Cadastro";
    },
    buttonText() {
      return this.isRegistered ? "Entrar" : "Cadastrar-se";
    },
    secondaryText() {
      return this.isRegistered
        ? "Não possui cadastro?"
        : "Já possui uma conta?";
    }
  },
  data: () => ({
    isRegistered: true,
    valid: false,
    email: "",
    fullName: "",
    password: "",
    rules: {
      email: [
        v => !!v || "Email é obrigatório",
        v => /.+@.+/.test(v) || "Email precisa ser válido"
      ],
      name: [v => !!v || `Seu nome é obrigatório(a)`],
      password: [
        v => !!v || "Senha é obrigatório",
        v => v.length >= 6 || "Senha precisa conter no mínimo 6 caracteres"
      ]
    }
  }),
  methods: {
    send() {
      let payload = {
        email: this.email.toLowerCase().trim(),
        password: this.password
      };

      if (!this.isRegistered) {
        payload.fullName = this.fullName;
      }

      if (this.$refs.form.validate()) {
        const action = this.isRegistered ? "logUserIn" : "createUser";
        this.$store.dispatch(action, payload);
        this.$emit("close-dialog");
      }
    }
  },
  name: "Access"
};
</script>
<style lang="scss" scoped>
span {
  color: black;
  cursor: pointer;
}
</style>
