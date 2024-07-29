<script setup lang="ts">
import { useModalStore } from "@/store/commons/useModal";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'radix-vue'
import { Icon } from '@iconify/vue'

const store = useModalStore()

</script>

<template>
  <DialogRoot v-model:open="store.showModal">
    <DialogPortal>
      <DialogOverlay class=" bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-blue-marguerite-700 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
        <header>
          <DialogTitle class=" text-blue-marguerite-100 m-0 text-base font-semibold">
            {{ store.modalProps.content.title }}
          </DialogTitle>
          <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            {{ store.modalProps.content.description }}
          </DialogDescription>
        </header>
        <main>
          <slot />
        </main>
        <footer>
          <div class="mt-[25px] flex justify-end gap-2">
            <DialogClose as-child v-if="store.modalProps.cancelBtnFn">
              <v-btn variant="text" @click="store.modalProps.cancelBtnFn" rounded="lg" color="white">
                {{ store.modalProps.content.cancelBtnLabel }}
              </v-btn>
            </DialogClose>
            <DialogClose as-child v-if="store.modalProps.acceptBtnFn">
              <v-btn variant="tonal" @click="store.modalProps.acceptBtnFn" color="white" rounded="lg">
                {{ store.modalProps.content.acceptBtnLabel }}
              </v-btn>
            </DialogClose>
          </div>
        </footer>
        <DialogClose
          class="text-white hover:bg-blue-marguerite-500 focus:shadow-blue-marguerite-950 absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full focus:shadow-md focus:outline-none transition-all"
          aria-label="Close">
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>