<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8 lg:py-10">
      <div class="text-center">
        <p class="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">Tips</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">We have currently {{ tips.length }} tips in our list</p>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-between my-8">
    <div class="border-4 border-light-blue-500 border-opacity-100 sm:px-36 lg:px-48 mx-8">this is for filter</div>

    <ul class="max-w-7xl px-10 grid grid-cols-1 gap-y-6 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
      <li v-for="tip in tips" :key="tip._id" class="col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 relative">
        <router-link :to="{ name: 'SingleTip', params: { id: tip._id } }">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 w-full space-y-2">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">
                  {{ tip.title }}
                </h3>
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">
                {{ tip.content }}
              </p>

              <div class="flex justify-between">
                <p class="mt-1 text-gray-500 text-sm truncate italic">
                  {{ tip.creator }}
                </p>
                <div>
                  <div v-for="tag in tip.tags" :key="tag" class="flex-shrink-0 flex-wrap inline-block px-2 mr-2 py-0.5 my-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ tag }}</div>
                </div>
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
