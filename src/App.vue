<template>
  <v-app>
    <v-container fluid>
      <GameHeader />
      <v-row justify="center">
        <v-btn
          to="/"
          class="mx-1"
        >
          Followers
        </v-btn>
        <v-btn
          to="/achievements"
          class="mx-1"
        >
          <v-icon left>mdi-trophy</v-icon>
          Achievements
        </v-btn>
        <v-btn
          to="/settings"
          class="mx-1"
        >
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
import GameHeader from './components/GameHeader.vue';

export default Vue.extend({ components: { GameHeader } });
</script>

<style>
html {
  overflow-y: auto !important;
}
</style>
