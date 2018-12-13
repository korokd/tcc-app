<template>
  <v-layout column fill-height="true" tag="article">
    <v-card color="white" height="300" tag="section">
      <v-layout>
        <v-flex>
          <!-- <v-img
            contain
            src="https://ka-perseus-images.s3.amazonaws.com/b7050828be2cefe38706619aa2e996290da5b0da.jpg"
          ></v-img>-->
          <v-card-text class="subheading">A arte...</v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card color="black" class="white--text" height="300" tag="section">
      <v-layout>
        <v-flex>
          <v-card-text>Aproximando...</v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card color="white" height="300" tag="section">
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
