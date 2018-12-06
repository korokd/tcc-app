<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="email" :rules="rules.email" label="Email" required autofocus></v-text-field>
        <v-text-field v-model="firstName" :rules="nameRules('Primeiro nome')" label="Primeiro nome" required v-if="!isRegistered"></v-text-field>
        <v-text-field v-model="lastName" :rules="nameRules('Último nome')" label="Último nome" required v-if="!isRegistered"></v-text-field>
        <v-text-field v-model="password" :rules="rules.password" label="Senha" required type="password"></v-text-field>
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
    firstName: "",
    lastName: "",
    password: "",
    rules: {
      email: [
        v => !!v || "Email é obrigatório",
        v => /.+@.+/.test(v) || "Email precisa ser válido"
      ],
      password: [
        v => !!v || "Senha é obrigatório",
        v => v.length >= 6 || "Email precisa ser válido"
      ]
    }
  }),
  methods: {
    nameRules(field) {
      if (this.isRegistered) {
        return [];
      }
      return [v => !!v || `${field} é obrigatório(a)`];
    },
    send() {
      let payload = { email: this.email, password: this.password };

      if (!this.isRegistered) {
        payload.firstName = this.firstName;
        payload.lastName = this.lastName;
      }

      if (this.$refs.form.validate()) {
        const action = this.isRegistered ? "logUserIn" : "createUser";
        this.$store.dispatch(action, payload);
        this.$emit("closeDialog");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
span {
  color: black;
  cursor: pointer;
}
</style>
