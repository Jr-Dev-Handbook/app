<template>
  <div class="w-full flex justify-center mt-8">
    <ul class="max-w-7xl grid grid-cols-1 gap-y-6 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="tip in tips" :key="tip._id" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 relative">
        <router-link :to="{ name: 'SingleTip', params: { id: tip._id } }">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 w-full">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">
                  {{ tip.title }}
                </h3>
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">
                {{ tip.content }}
              </p>
              <p class="mt-1 text-gray-500 text-sm truncate">
                {{ tip.creator }}
              </p>
              <div class="flex flex-row-reverse">
                <div v-for="tag in tip.tags" :key="tag" class="flex-shrink-0 flex-wrap inline-block px-2 mr-2 py-0.5 my-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ tag }}</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
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
