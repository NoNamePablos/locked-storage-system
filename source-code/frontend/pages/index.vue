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

  <!--  <section ref="main" class="bg-gray-900 overflow-hidden">
    <auth-header
      login
      register
      tooltip-color="geekblue"
      class="h-[54px] py-2 bg-gray-900 border-transparent border-b border-b-gray-500 border-solid"
    />
    <div class="max-w-[1366px] mx-auto px-8">
      <div class="h-screen flex items-center justify-center">
        <a-space direction="vertical" align="center">
          <a-typography-title :level="1">
            <div class="text-white text-2xl sm:text-5xl title-animation">
              Защита личных онлайн-данных для каждого
            </div>
          </a-typography-title>
          <a-typography-text>
            <div class="text-white text-lg max-w-[800px] text-center description-animation">
              Конфиденциальность — это не опция в MEGA, а стандарт. Потому что мы верим, что у
              каждого должна быть возможность хранить данные и общаться в сети безопасно и
              конфиденциально.
            </div>
          </a-typography-text>
          <div class="mt-4">
            <a-button
              type="primary"
              class="button-animation py-2 text-xl w-[256px] h-[48px] opacity-0"
            >
              Попробовать бесплатно
            </a-button>
          </div>
        </a-space>
      </div>
      <div class="py-24">
        <a-space direction="vertical">
          <a-typography-title :level="1">
            <div class="text-white text-2xl sm:text-5xl title-animation">
              Безопасность, которая всегда включена
            </div>
          </a-typography-title>
          <a-typography-text>
            <div class="text-white text-lg max-w-[800px] text-center description-animation">
              Мы защищаем ваши данные с помощью шифрования с нулевым разглашением, высочайшего
              уровня онлайн-безопасности и конфиденциальности. Это означает, что только отправитель
              и получатель имеют ключи, необходимые для просмотра, чтения или прослушивания данных,
              хранящихся или совместно используемых в MEGA.
            </div>
          </a-typography-text>
        </a-space>
        <div class="max-w-[506px] max-h-[430px]">
          <video
            playsinline
            autoplay
            loop
            muted
            class="w-full h-full object-contain scale-105 pointer-events-none select-none"
          >
            <source src="~/assets/video/main/cube-square.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="h-screen bg-red-300">fsdafsdf</div>
    </div>
  </section>-->
</template>

<style scoped></style>
