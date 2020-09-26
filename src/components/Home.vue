<template>
  <div class="home">
    You have {{ followers }} followers
    <br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gameStore from '@/stores/game';

export default Vue.extend({
  data() {
    return gameStore.state;
  },
});
</script>
