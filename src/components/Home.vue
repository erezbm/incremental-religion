<template>
  <div>
    <div
      v-for="(tier, i) in missionaryTiers"
      :key="i"
    >
      Tier {{i + 1}}: {{tier.count.toFixed(0)}}
      <v-btn
        @click="tier.count++"
        outlined
      >
        Buy
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gameStore from '@/stores/game';

export default Vue.extend({
  data: () => gameStore.state,
});
</script>
