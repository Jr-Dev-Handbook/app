<template>
  <div class="max-w-3xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8 lg:py-10">
    <TipForm :accountId="accountId" :tip="tip" :submitForm="createTip" />
  </div>
</template>

<script>
import { wallet } from '@/services/near';

import TipForm from '@/components/TipForm.vue';

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    TipForm
  },
  setup() {
    const accountId = ref('');
    accountId.value = wallet.getAccountId();
    const API_URL = 'http://localhost:5000/tips';
    const router = useRouter();
    const tip = reactive({
      title: '',
      content: '',
      creator: '',
      // NOTE: tags should be array but it is not right now. Need to fix this issue.
      tags: []
    });
    async function createTip() {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            title: tip.title,
            content: tip.content,
            creator: accountId.value,
            tags: tip.tags
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
      createTip,
      accountId
    };
  }
};
</script>

<style></style>
