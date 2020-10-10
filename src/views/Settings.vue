<template>
  <div>settings component</div>
</template>

<script lang="ts">
import Vue from 'vue';
import settingsStore from '@/stores/settings';

export default Vue.extend({
  data: () => settingsStore.state,
});
</script>
