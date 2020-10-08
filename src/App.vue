<template>
  <v-app>
    <v-container fluid>
      <p class="text-center text-body-2">
        You have <span class="text-h5">{{ followers.toFixed(0) }}</span> followers
        <br>
        You are getting {{ (followersPerSecond * 10).toFixed(2) }} followers per 10 seconds
      </p>
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
import gameStore from './stores/game';

export default Vue.extend({
  data: () => gameStore.state,
});
</script>

<style>
html {
  overflow-y: auto !important;
}
</style>
