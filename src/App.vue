<template>
  <v-app id="inspire">
    <app-drawer />
    <app-toolbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppDrawer from "@/components/AppDrawer";
import AppToolbar from "@/components/AppToolbar";
import AppEvents from "./event";

export default {
  components: {
    AppDrawer,
    AppToolbar
  },
  data: () => ({
  }),
  created() {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  }
};
</script>