<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-5xl mx-auto">
      <TipList />
      <!-- Content goes here -->
    </div>
  </div>
</template>

<script>
import TipList from '@/components/TipList.vue';
export default {
  components: {
    TipList
  }
};
</script>
