<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="tip in tips" :key="tip._id" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <router-link :to="{ name: 'SingleTip', params: { id: tip._id } }">
        <div class="flex-1 flex flex-col p-8">
          <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ tip.title }}</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Content</dt>
            <dd class="text-gray-500 text-sm">{{ tip.content }}</dd>
          </dl>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Creator</dt>
            <dd class="text-gray-500 text-sm">{{ tip.creator }}</dd>
          </dl>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from 'vue';

export default {
  setup() {
    const tips = ref([]);

    const API_URL = 'http://localhost:5000/tips';

    onMounted(() => {
      getTips();
    });

    async function getTips() {
      const response = await fetch(API_URL);
      const json = await response.json();
      tips.value = json;
    }

    return {
      tips
    };
  }
};
</script>
