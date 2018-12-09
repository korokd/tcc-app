<template>
  <v-layout column fill-height="true" tag="article">
    <v-card color="white" height="500" tag="section">
      <v-layout>
        <v-flex>
          <v-img
            contain
            height="400"
            src="http://www.zoewatsonartist.com/wp-content/uploads/2015/12/school-educational-tour-palette.png"
          ></v-img>
          <v-card-text>Porque...</v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card color="black" class="white--text" height="500" tag="section">
      <v-layout>
        <v-flex>
          <v-card-text>Aproximando...</v-card-text>
          <v-img></v-img>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card color="white" height="500" tag="section">
      <v-layout>
        <v-flex>
          <v-img></v-img>
          <v-card-text>Uma plataforma...</v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  name: "Landing"
};
</script>
<style lang="scss" scoped>
</style>
