<template>
  <TipDetail :accountId="accountId" :tip="tip" :removeTip="removeTip" />
</template>

<script>
import TipDetail from '../components/TipDetail.vue';
import { wallet } from '@/services/near';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
  components: {
    TipDetail
  },
  setup() {
    const accountId = ref('');
    accountId.value = wallet.getAccountId();
    const route = useRoute();
    const router = useRouter();

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
    async function removeTip(id) {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      router.push({
        name: 'Home'
      });
    }
    return {
      tip,
      accountId,
      removeTip
    };
  }
};
</script>

<style></style>
