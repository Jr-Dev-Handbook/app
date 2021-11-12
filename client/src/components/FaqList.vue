<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8 lg:py-10">
      <div class="text-center">
        <p class="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">FAQs</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">We have currently {{ faqs.length }} FAQs in our list</p>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
      <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
        <div class="w-full">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center my-8">
    <ul class="max-w-7xl px-10 grid grid-cols-1 gap-y-6 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
      <li v-for="faq in faqs" :key="faq._id" class="col-span-2 bg-white rounded-lg shadow divide-y divide-gray-200 relative">
        <router-link :to="{ name: 'SingleFaq', params: { id: faq._id } }">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 w-full space-y-2">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">
                  {{ faq.title }}
                </h3>
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">
                {{ faq.content }}
              </p>

              <div class="flex justify-between">
                <p class="mt-1 text-gray-500 text-sm truncate italic">
                  {{ faq.creator }}
                </p>
                <div>
                  <div v-for="tag in faq.tags" :key="tag" class="flex-shrink-0 flex-wrap inline-block px-2 mr-2 py-0.5 my-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ tag }}</div>
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
import { SearchIcon } from '@heroicons/vue/solid';

export default {
  components: {
    SearchIcon
  },
  setup() {
    const faqs = ref([]);

    const API_URL = 'http://localhost:5000/faqs';

    onMounted(() => {
      getFaqs();
    });

    async function getFaqs() {
      const response = await fetch(API_URL);
      const json = await response.json();
      faqs.value = json;
    }

    return {
      faqs
    };
  }
};
</script>
