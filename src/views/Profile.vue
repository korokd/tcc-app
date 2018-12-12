<template>
  <v-container>
    <v-subheader class="headline">Perfil</v-subheader>
    <v-subheader class="subheading">Seus dados</v-subheader>
    <v-form ref="data" v-model="valid.userData" @blur="onUserDataBlur">
      <v-text-field v-model="user.email" :rules="rules.email" label="Email" required></v-text-field>
      <v-text-field v-model="user.fullName" :rules="rules.name" label="Nome completo" required></v-text-field>
      <v-text-field
        v-model="user.password"
        :rules="rules.password"
        label="Senha"
        required
        type="password"
      ></v-text-field>
    </v-form>
    <v-subheader class="subheading">{{ subheaderText }}</v-subheader>
    <v-form ref="skills" v-model="valid.skills" @blur="onSkillBlur">
      <div v-for="skill in user.skills" :key="`${skill.name}/${skill.proficiency}`">
        <v-text-field v-model="skill.name" :rules="rules.skill" placeholder="Habilidade" required></v-text-field>
        <v-slider v-model="skill.proficiency"></v-slider>
      </div>
      <div>
        <v-text-field v-model="newSkill.name" :placeholder="placeholderText"></v-text-field>
        <v-slider v-model="newSkill.proficiency"></v-slider>
        <div class="flex row">
          <v-spacer></v-spacer>
          <v-btn @click="onSkillBlur" flat>
            <v-icon>add</v-icon>
            <span>Adicionar</span>
          </v-btn>
        </div>
      </div>
    </v-form>
  </v-container>
</template>
<script>
export default {
  computed: {
    placeholderText() {
      if (this.$store.state.user.type === "Artist") {
        return "Nova habilidade";
      }
      return "Nova especialidade";
    },
    subheaderText() {
      if (this.$store.state.user.type === "Artist") {
        return "Habilidades";
      }
      return "Especialidades";
    }
  },
  created() {
    if (!this.$store.state.isUserLoggedIn) {
      return this.$router.push("home");
    }

    this.user = this.$store.state.user;
  },
  data: () => ({
    user: {},
    newSkill: { name: "", proficiency: 0 },
    valid: {
      userData: false,
      skills: false
    },
    rules: {
      email: [
        v => !!v || "Email é obrigatório",
        v => /.+@.+/.test(v) || "Email precisa ser válido"
      ],
      name: [v => !!v || `Seu nome é obrigatório(a)`],
      password: [
        v => !!v || "Senha é obrigatório",
        v => v.length >= 6 || "Email precisa ser válido"
      ],
      skill: [v => !!v || `O nome da habilidade é obrigatório(a)`]
    }
  }),
  methods: {
    onUserDataBlur() {
      try {
        if (this.$refs.data.validate()) {
          this.$store.dispatch("updateUser", this.user);
        }
      } catch (e) {
        console.error(e);
      }
    },
    onSkillBlur() {
      try {
        if (this.$refs.skills.validate()) {
          let _u = JSON.parse(JSON.stringify(this.user));
          if (
            this.newSkill &&
            this.newSkill.name &&
            this.newSkill.proficiency
          ) {
            _u.skills.unshift(this.newSkill);
          }
          this.$store.dispatch("updateUser", _u);
        }
      } catch (e) {
        console.error(e);
      }
    }
  },
  name: "Profile"
};
</script>
<style lang="scss" scoped>
.white {
  color: white;
}
.flex {
  display: flex;

  &.row {
    flex-direction: row;
  }
}
</style>
