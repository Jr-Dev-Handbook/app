<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8 lg:py-10">
      <div class="text-center">
        <p class="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">Tips</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">We have currently {{ tips.length }} tips in our list</p>
        <router-link :to="{ name: 'CreateTip' }">
          <button type="button" class="inline-flex items-center mt-10 px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit your tip
            <PlusCircleIcon class="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </router-link>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-row-3 lg:grid-cols-3 mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:flex-nowrap lg:px-8 lg:py-10 my-8 max-w-7xl">
    <ul class="order-2 lg:order-1 grid grid-cols-1 gap-y-6 gap-x-12 sm:grid-cols-2 lg:grid-cols-2 mb-5 lg:col-span-2">
      <li v-for="tip in tips" :key="tip._id" class="bg-white rounded-lg shadow divide-y divide-gray-200 relative border-t-2 border-indigo-600">
        <router-link :to="{ name: 'SingleTip', params: { id: tip._id } }">
          <div class="w-full flex items-center justify-between p-6 space-x-6 h-48">
            <div class="flex-1 w-full space-y-2">
              <div class="flex justify-between items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">
                  {{ tip.title }}
                </h3>
                <!-- <div>
                  <router-link :to="{ name: 'UpdateTip', params: { id: tip._id } }">
                    <div @click="editTip(tip._id)" class="flex-shrink-0 flex-wrap inline-block px-2 mr-2 py-0.5 my-1 text-red-800 text-xs font-medium rounded-full">
                      <PencilIcon class="h-6 w-6" aria-hidden="true" />
                    </div>
                  </router-link>
                  <@click.prevent prevents refreshing the page
                  <div @click.prevent="removeTip(tip._id)" class="flex-shrink-0 flex-wrap inline-block px-2 mr-2 py-0.5 my-1 text-red-800 text-xs font-medium rounded-full">
                    <TrashIcon class="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>-->
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">
                {{ tip.content }}
              </p>

              <div class="flex justify-between">
                <p class="mt-1 text-gray-500 text-sm truncate italic">
                  {{ tip.creator }}
                </p>

                <div>
                  <div v-for="tag in tip.tags" :key="tag" class="flex-shrink-0 flex-wrap inline-block px-2 mr-2 py-0.5 my-1 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>

    <div class="flex flex-col order-1 lg:order-2 mx-auto mb-10 lg:mx-12 lg:col-span-1 lg:self-start">
      <div class="hidden lg:block flex flex-col justify-center content-start px-10 h-full">
        <a class="text-gray-500 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 font-medium w-16 md:w-60 rounded-l-full lg:rounded-full flex" target="_blank" rel="noreferrer" href="https://stats.gallery/"
          ><div class="rounded-l-full py-3 pl-4 pr-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 67.526 76.5703" fill="currentColor">
              <path class="cls-1" d="M37.8925,23.1852C30.964,37.3934,24.2679,51.1273,17.5691,64.86c-1.4565,2.9859-3.015,5.9266-4.3443,8.9678a2.7152,2.7152,0,0,1-3.04,1.845C7.2821,75.56,4.3717,75.64,1.4778,75.64c-.23-1.0363.3866-1.7017.7391-2.4179Q19.5456,38.0088,36.9191,2.8177c.3529-.7151.44-1.8821,1.3478-1.9241.9712-.0449,1.0345,1.1519,1.38,1.8516Q52.8455,29.4379,66.028,56.1384c.8479,1.71,1.1321,2.6369-1.3688,2.4124-2.801-.2514-6.1589.9952-8.287-.4546-2.0074-1.3676-2.7858-4.5738-4.0439-7.0028Q45.9092,38.7012,39.5325,26.2871C39.0838,25.4171,38.6179,24.5559,37.8925,23.1852Z" />
            </svg>
          </div>
          <div class="hidden md:flex flex-grow rounded-r-full py-3 items-center bg-">
            Stats Gallery<svg class="w-3 text-gray-400 ml-2" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.26585 4.31119e-07H13.7308C13.8022 4.31119e-07 13.8707 0.0283658 13.9211 0.0788564C13.9716 0.129347 14 0.197827 14 0.269231V4.73415C14.0001 4.78747 13.9844 4.83962 13.9548 4.88398C13.9252 4.92835 13.8831 4.96293 13.8339 4.98335C13.7846 5.00376 13.7304 5.0091 13.6781 4.99867C13.6258 4.98824 13.5778 4.96252 13.5402 4.92477L11.8785 3.26308L7.84 7.30154C7.68689 7.44421 7.48438 7.52188 7.27513 7.51819C7.06588 7.5145 6.86624 7.42973 6.71825 7.28175C6.57027 7.13376 6.4855 6.93412 6.48181 6.72487C6.47812 6.51562 6.55579 6.31311 6.69846 6.16L10.7369 2.12154L9.07523 0.459847C9.03748 0.422192 9.01176 0.374177 9.00133 0.321888C8.99091 0.269599 8.99624 0.215391 9.01665 0.166136C9.03707 0.116881 9.07165 0.0747973 9.11602 0.0452203C9.16038 0.0156434 9.21253 -9.49655e-05 9.26585 4.31119e-07ZM1.88462 1.07692C1.38478 1.07692 0.905425 1.27548 0.551991 1.62891C0.198557 1.98235 0 2.46171 0 2.96154V12.1154C0 13.1557 0.844308 14 1.88462 14H11.0385C11.5383 14 12.0177 13.8014 12.3711 13.448C12.7245 13.0946 12.9231 12.6152 12.9231 12.1154V8.34616C12.9231 8.13194 12.838 7.9265 12.6865 7.77503C12.535 7.62356 12.3296 7.53846 12.1154 7.53846C11.9012 7.53846 11.6957 7.62356 11.5443 7.77503C11.3928 7.9265 11.3077 8.13194 11.3077 8.34616V12.1154C11.3077 12.1868 11.2793 12.2553 11.2288 12.3058C11.1783 12.3563 11.1099 12.3846 11.0385 12.3846H1.88462C1.81321 12.3846 1.74473 12.3563 1.69424 12.3058C1.64375 12.2553 1.61538 12.1868 1.61538 12.1154V2.96154C1.61538 2.89013 1.64375 2.82165 1.69424 2.77116C1.74473 2.72067 1.81321 2.69231 1.88462 2.69231H5.65385C5.86806 2.69231 6.0735 2.60721 6.22497 2.45574C6.37644 2.30427 6.46154 2.09883 6.46154 1.88462C6.46154 1.6704 6.37644 1.46496 6.22497 1.31349C6.0735 1.16202 5.86806 1.07692 5.65385 1.07692H1.88462Z"
                fill="currentColor"
              ></path>
            </svg></div
        ></a>
        <a class="text-gray-500 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 font-medium w-16 md:w-60 rounded-l-full lg:rounded-full flex" target="_blank" rel="noreferrer" href="https://near.university/"
          ><div class="rounded-l-full py-3 pl-4 pr-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
          </div>
          <div class="hidden md:flex flex-grow rounded-r-full py-3 items-center">
            Learn NEAR
            <svg class="w-3 text-gray-400 ml-2" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.26585 4.31119e-07H13.7308C13.8022 4.31119e-07 13.8707 0.0283658 13.9211 0.0788564C13.9716 0.129347 14 0.197827 14 0.269231V4.73415C14.0001 4.78747 13.9844 4.83962 13.9548 4.88398C13.9252 4.92835 13.8831 4.96293 13.8339 4.98335C13.7846 5.00376 13.7304 5.0091 13.6781 4.99867C13.6258 4.98824 13.5778 4.96252 13.5402 4.92477L11.8785 3.26308L7.84 7.30154C7.68689 7.44421 7.48438 7.52188 7.27513 7.51819C7.06588 7.5145 6.86624 7.42973 6.71825 7.28175C6.57027 7.13376 6.4855 6.93412 6.48181 6.72487C6.47812 6.51562 6.55579 6.31311 6.69846 6.16L10.7369 2.12154L9.07523 0.459847C9.03748 0.422192 9.01176 0.374177 9.00133 0.321888C8.99091 0.269599 8.99624 0.215391 9.01665 0.166136C9.03707 0.116881 9.07165 0.0747973 9.11602 0.0452203C9.16038 0.0156434 9.21253 -9.49655e-05 9.26585 4.31119e-07ZM1.88462 1.07692C1.38478 1.07692 0.905425 1.27548 0.551991 1.62891C0.198557 1.98235 0 2.46171 0 2.96154V12.1154C0 13.1557 0.844308 14 1.88462 14H11.0385C11.5383 14 12.0177 13.8014 12.3711 13.448C12.7245 13.0946 12.9231 12.6152 12.9231 12.1154V8.34616C12.9231 8.13194 12.838 7.9265 12.6865 7.77503C12.535 7.62356 12.3296 7.53846 12.1154 7.53846C11.9012 7.53846 11.6957 7.62356 11.5443 7.77503C11.3928 7.9265 11.3077 8.13194 11.3077 8.34616V12.1154C11.3077 12.1868 11.2793 12.2553 11.2288 12.3058C11.1783 12.3563 11.1099 12.3846 11.0385 12.3846H1.88462C1.81321 12.3846 1.74473 12.3563 1.69424 12.3058C1.64375 12.2553 1.61538 12.1868 1.61538 12.1154V2.96154C1.61538 2.89013 1.64375 2.82165 1.69424 2.77116C1.74473 2.72067 1.81321 2.69231 1.88462 2.69231H5.65385C5.86806 2.69231 6.0735 2.60721 6.22497 2.45574C6.37644 2.30427 6.46154 2.09883 6.46154 1.88462C6.46154 1.6704 6.37644 1.46496 6.22497 1.31349C6.0735 1.16202 5.86806 1.07692 5.65385 1.07692H1.88462Z"
                fill="currentColor"
              ></path>
            </svg></div
        ></a>
        <a class="text-gray-500 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-10 font-medium w-16 md:w-60 rounded-l-full lg:rounded-full flex" target="_blank" rel="noreferrer" href="https://near-in-minutes.com/"
          ><div class="rounded-l-full py-3 pl-4 pr-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="hidden md:flex flex-grow rounded-r-full py-3 items-center">
            NEAR in Minutes
            <svg class="w-3 text-gray-400 ml-2" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.26585 4.31119e-07H13.7308C13.8022 4.31119e-07 13.8707 0.0283658 13.9211 0.0788564C13.9716 0.129347 14 0.197827 14 0.269231V4.73415C14.0001 4.78747 13.9844 4.83962 13.9548 4.88398C13.9252 4.92835 13.8831 4.96293 13.8339 4.98335C13.7846 5.00376 13.7304 5.0091 13.6781 4.99867C13.6258 4.98824 13.5778 4.96252 13.5402 4.92477L11.8785 3.26308L7.84 7.30154C7.68689 7.44421 7.48438 7.52188 7.27513 7.51819C7.06588 7.5145 6.86624 7.42973 6.71825 7.28175C6.57027 7.13376 6.4855 6.93412 6.48181 6.72487C6.47812 6.51562 6.55579 6.31311 6.69846 6.16L10.7369 2.12154L9.07523 0.459847C9.03748 0.422192 9.01176 0.374177 9.00133 0.321888C8.99091 0.269599 8.99624 0.215391 9.01665 0.166136C9.03707 0.116881 9.07165 0.0747973 9.11602 0.0452203C9.16038 0.0156434 9.21253 -9.49655e-05 9.26585 4.31119e-07ZM1.88462 1.07692C1.38478 1.07692 0.905425 1.27548 0.551991 1.62891C0.198557 1.98235 0 2.46171 0 2.96154V12.1154C0 13.1557 0.844308 14 1.88462 14H11.0385C11.5383 14 12.0177 13.8014 12.3711 13.448C12.7245 13.0946 12.9231 12.6152 12.9231 12.1154V8.34616C12.9231 8.13194 12.838 7.9265 12.6865 7.77503C12.535 7.62356 12.3296 7.53846 12.1154 7.53846C11.9012 7.53846 11.6957 7.62356 11.5443 7.77503C11.3928 7.9265 11.3077 8.13194 11.3077 8.34616V12.1154C11.3077 12.1868 11.2793 12.2553 11.2288 12.3058C11.1783 12.3563 11.1099 12.3846 11.0385 12.3846H1.88462C1.81321 12.3846 1.74473 12.3563 1.69424 12.3058C1.64375 12.2553 1.61538 12.1868 1.61538 12.1154V2.96154C1.61538 2.89013 1.64375 2.82165 1.69424 2.77116C1.74473 2.72067 1.81321 2.69231 1.88462 2.69231H5.65385C5.86806 2.69231 6.0735 2.60721 6.22497 2.45574C6.37644 2.30427 6.46154 2.09883 6.46154 1.88462C6.46154 1.6704 6.37644 1.46496 6.22497 1.31349C6.0735 1.16202 5.86806 1.07692 5.65385 1.07692H1.88462Z"
                fill="currentColor"
              ></path>
            </svg></div
        ></a>
      </div>

      <hr class="dark:border-gray-700 hidden lg:block my-6" />
      <div class="flex flex-col p-10 rounded-lg border shadow border-gray-200 h-full mt-4">
        <h1 class="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-2xl">Popular tips</h1>
        <ol class="list-decimal mt-6">
          <li v-for="tip in tips.slice(0, 5)" :key="tip._id" class="popular">
            <router-link :to="{ name: 'SingleTip', params: { id: tip._id } }">
              <h3 class="text-gray-900 text-sm font-medium truncate hover:text-indigo-600">
                {{ tip.title }}
              </h3>
            </router-link>
          </li>
        </ol>
      </div>
    </div>

    <button v-if="!disableButton" @click="loadMore" type="button" class="order-3 lg:row-start-2 lg:col-span-2 justify-self-center inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Load more</button>
  </div>
</template>

<script>
import {
  PlusCircleIcon
  // TrashIcon, PencilIcon
} from '@heroicons/vue/solid';

import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

export default {
  components: {
    PlusCircleIcon
    // TrashIcon,
    // PencilIcon
  },
  setup() {
    const tips = ref([]);
    const allTips = ref([]);
    const router = useRouter();
    const disableButton = ref(false);

    const API_URL = 'http://localhost:5000/tips';

    onMounted(() => {
      getTips();
    });

    async function getTips() {
      const response = await fetch(API_URL);
      const json = await response.json();
      allTips.value = json;
      tips.value = json.slice(0, 6);
    }

    const loadMore = () => {
      tips.value = allTips.value;
      if (tips.value.length === allTips.value.length) {
        disableButton.value = true;
      } else {
        disableButton.value = false;
      }
    };

    async function removeTip(_id) {
      await fetch(`${API_URL}/${_id}`, {
        method: 'DELETE'
      });
      router.push({
        name: 'Home'
      });
      getTips();
    }

    async function editTip(_id) {
      router.push({
        name: 'Update',
        params: {
          id: _id
        }
      });
    }

    return {
      tips,
      removeTip,
      editTip,
      loadMore,
      disableButton
    };
  }
};
</script>

<style lang="postcss">
ol {
  counter-reset: my-awesome-counter;
}
ol li {
  counter-increment: my-awesome-counter;
  list-style: none;
  @apply flex items-center;
}
ol li::before {
  content: counter(my-awesome-counter);
  @apply bg-indigo-800 flex justify-center m-2 p-2 w-10 h-10 text-indigo-50 rounded-sm;
}
</style>
