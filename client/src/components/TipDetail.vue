<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-screen-lg mx-auto">
        <h1>
          <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ tip.title }}</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">{{ tip.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tip']
};
</script>

<style></style>
