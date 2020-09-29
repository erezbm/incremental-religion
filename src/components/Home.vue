<template>
  <v-btn @click="followers++">
    Add follower
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import gameStore from '@/stores/game';

export default Vue.extend({
  data: () => gameStore.state,
});
</script>
