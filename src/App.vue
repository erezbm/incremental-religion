<template>
  <v-app>
    <v-container fluid>
      <p class="text-center">
        You have {{followers}} followers
      </p>
      <v-row justify="center">
        <v-btn to="/">
          Followers
        </v-btn>
        <v-btn to="/achievements">
          <v-icon left>mdi-trophy</v-icon>
          Achievements
        </v-btn>
        <v-btn to="/settings">
          <v-icon left>mdi-cog</v-icon>
          Settings
        </v-btn>
      </v-row>
    </v-container>

    <v-container fluid>
      <router-view />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import gameStore from './stores/game';

export default Vue.extend({
  data: () => gameStore.state,
});
</script>

<style>
html {
  overflow-y: auto;
}
</style>
