<template>
  <div>
    <div
      v-for="(tier, i) in convertersTiers"
      :key="i"
    >
      Converters Tier {{ i + 1 }}: {{ formatAsInteger(tier.count) }}
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
import formattingMixin from '@/mixins/formattingMixin';

export default Vue.extend({
  data: () => gameStore.state,
  mixins: [formattingMixin],
});
</script>
