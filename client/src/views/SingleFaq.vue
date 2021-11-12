<template>
  <FaqDetail :faq="faq" />
</template>

<script>
import FaqDetail from '../components/FaqDetail.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
  components: {
    FaqDetail
  },
  setup() {
    const route = useRoute();

    const API_URL = 'http://localhost:5000/faqs';

    const faq = ref({
      title: '',
      content: '',
      creator: ''
    });
    onMounted(() => {
      getFaq();
    });
    async function getFaq() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      faq.value = json;
    }
    return {
      faq
    };
  }
};
</script>

<style></style>
