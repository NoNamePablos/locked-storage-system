<script setup lang="ts">
  import AuthHeader from '~/components/AuthLayout/AuthHeader.vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const main = ref(null)
  let tl
  let ctx

  onMounted(() => {
    ctx = gsap.context(self => {
      const titles = self.selector('.title-animation')
      const descrs = self.selector('.description-animation')
      const buttons = self.selector('.button-animation')
      titles.forEach(title => {
        gsap.from(
          title,
          {
            letterSpacing: '10px',
            opacity: 0,
            x: 300,
            skewX: 65,
            scrollTrigger: title
          },
          {
            letterSpacing: '0',
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: title
          }
        )
      })
      descrs.forEach(p => {
        gsap.fromTo(
          p,
          {
            opacity: 0,
            x: 150,
            skewX: 30
          },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: p
          }
        )
      })
      buttons.forEach(button => {
        gsap.fromTo(
          button,
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 1,
            delay: 1,
            scrollTrigger: button
          }
        )
      })
    }, main.value)
  })
</script>

<template>
  <section ref="main" class="bg-gray-900 overflow-hidden">
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
  </section>
</template>

<style scoped></style>
