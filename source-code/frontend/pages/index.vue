<script setup lang="ts">
  import AuthHeader from '~/components/AuthLayout/AuthHeader.vue'
  import MainHeaderSection from '~/components/pages/Main/MainHeaderSection.vue'
  import MainFeaturesSection from '~/components/pages/Main/MainFeaturesSection.vue'
  import MainChooseSection from '~/components/pages/Main/MainChooseSection.vue'
</script>

<template>
  <auth-header
    login
    register
    tooltip-color="geekblue"
    class="h-[54px] py-2 transition-opacity opacity-100 bg-white block border-transparent border-b border-b-gray-300 border-solid"
  />

  <main-header-section />
  <main-features-section />
  <main-choose-section />
</template>

<style scoped></style>
