<template>
  <div class="max-w-3xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8 lg:py-10">
    <TipForm :tip="tip" :submitForm="updateTip" :getTip="getTip" />
  </div>
</template>

<script>
import TipForm from '@/components/TipForm.vue';

import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
  components: {
    TipForm
  },
  setup() {
    const API_URL = 'http://localhost:5000/tips';
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      getTip();
    });

    const tip = ref({
      title: '',
      content: '',
      creator: '',
      // NOTE: tags should be array but it is not right now. Need to fix this issue.
      tags: []
    });

    async function getTip() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      tip.value = json;
    }

    async function updateTip() {
      try {
        const { id } = route.params;
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            title: tip.value.title,
            content: tip.value.content,
            creator: tip.value.creator,
            tags: tip.value.tags
          })
        });
        await response.json();
        router.push({
          name: 'Home'
        });
      } catch (error) {
        console.log(error);
      }
    }
    return {
      tip,
      updateTip,
      getTip
    };
  }
};
</script>

<style></style>
