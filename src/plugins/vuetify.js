import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";

import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: colors.shades.black,
    secondary: colors.grey.darken4,
    // ,error: colors.red.darken4,
    // info: colors.lightBlue.darken1,
    // success: colors.green.lighten1,
    // warning: colors.yellow.accent3
  }
});
