<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-screen-lg mx-auto">
        <h1>
          <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ result.title }}</span>
        </h1>
        <!-- <button v-if="account" type="submit" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button> -->
        <router-link v-if="account" :to="{ name: 'UpdateTip', params: { id: id } }" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</router-link>
        <button v-if="isSame" @click="removeTip(id)" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Remove</button>

        <p class="mt-8 text-xl text-gray-500 leading-8">{{ result.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
export default {
  props: {
    tip: {
      type: Object,
      required: true
    },
    removeTip: {
      type: Function,
      required: true
    },
    accountId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // if you don't want to lose reactivity of your props, use them with ref and watchEffect
    const result = ref(props.tip);
    const account = ref(props.accountId);
    const route = useRoute();
    const { id } = route.params;
    const isSame = ref(false);
    console.log(isSame.value);
    console.log(result.value, 'test test result');

    onMounted(() => {
      try {
        changeStatus();
        console.log(isSame.value, 'onMounted');
      } catch (err) {
        console.log(err);
      }
    });

    watchEffect(() => {
      result.value = props.tip;
      account.value = props.accountId;
      console.log(result.value, 'watchEffect test');
    });

    function changeStatus() {
      if (account.value === result.value.creator) {
        isSame.value = true;
        console.log(account.value, 'wallet');
        console.log(props.tip, 'result');
        console.log('result test');
        console.log('test test');
      } else {
        console.log(account.value, 'wallet');
        console.log(props.tip, 'result');
        isSame.value = false;
      }
    }
    return {
      account,
      result,
      id,
      isSame
    };
  }
};
</script>

<style></style>
