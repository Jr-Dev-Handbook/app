<template>
  <form @submit.prevent="submitForm">
    <div class="my-6">
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <div class="mt-1">
        <input type="text" name="title" id="title" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="title" v-model="result.title" />
      </div>
    </div>
    <div class="my-6">
      <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
      <div class="mt-1">
        <textarea type="text" name="content" id="content" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="content" v-model="result.content" />
      </div>
    </div>
    <div class="my-6">
      <label for="creator" class="block text-sm font-medium text-gray-700">Creator</label>
      <div class="mt-1">
        <input type="text" name="creator" id="creator" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="creator" v-model="result.creator" />
      </div>
    </div>
    <div class="my-6">
      <label for="tags" class="block text-sm font-medium text-gray-700">Tags</label>
      <div class="mt-1">
        <input type="text" name="tags" id="tags" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="tags" v-model="result.tags" />
      </div>
    </div>
    <button type="submit" @click="findTags()" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    tip: {
      type: Object,
      required: true
    },
    submitForm: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const result = props.tip;

    return {
      result
    };
  }
};
</script>

<style></style>
