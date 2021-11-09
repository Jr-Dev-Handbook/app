<template>
  <TipDetail :tip="tip" />
</template>

<script>
import TipDetail from '../components/TipDetail.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
  components: {
    TipDetail
  },
  setup() {
    const route = useRoute();

    const API_URL = 'http://localhost:5000/tips';

    const tip = ref({
      title: '',
      content: '',
      creator: ''
    });
    onMounted(() => {
      getTip();
    });
    async function getTip() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      tip.value = json;
    }
    return {
      tip
    };
  }
};
</script>

<style></style>
