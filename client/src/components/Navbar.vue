<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <div class="block text-white lg:hidden h-6 w-auto">JDH</div>
            <div class="hidden text-white lg:block h-6 w-auto">Junior Dev HandBook</div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in nav" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <Login />
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Search</span>
            <SearchIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in nav" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { watch, reactive } from 'vue';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import Login from '@/components/Login.vue';

const navigation = [
  { name: 'Tips', href: '/', current: true }
  // { name: 'FAQ', href: '/faq', current: false },
  // { name: 'Fundamentals', href: '#', current: false }
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    SearchIcon,
    MenuIcon,
    XIcon,
    Login
  },
  setup() {
    const nav = reactive(navigation);
    //this method watchs the router link's current page to add the hover affect
    watch(name, newValue => {
      for (let i = 0; i < nav.length; i++) {
        const route = nav[i];
        route.current = false;
        if (route.name === newValue) {
          route.current = true;
        }
      }
    });

    return {
      nav
    };
  }
};
</script>
