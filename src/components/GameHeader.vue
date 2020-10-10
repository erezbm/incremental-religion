<template>
  <p class="text-center text-body-2">
    <span class="text-h4">{{ religionName }}</span>
    <br>
    You have <span class="text-h5">{{ formatAsInteger(followers) }}</span> followers
    <br>
    {{ formatNumber(followersPerSecond * 10) }} followers / 10 seconds
    <br>
    You have <span class="text-h6">{{ formatAsInteger(money) }}</span> money
    <br>
    {{ formatNumber(moneyPerSecond) }} money / second
  </p>
</template>

<script lang="ts">
import Vue from 'vue';
import gameStore from '@/stores/game';
import formattingMixin from '@/mixins/formattingMixin';

export default Vue.extend({
  mixins: [formattingMixin],
  data: () => gameStore.state,
});
</script>
