<template>
  <ul class="flex flex-col gap-4">
    <li v-for="paymentItem of paymentList" :key="paymentItem.id">
      <ClickeableCard :title="paymentItem.title" :url="paymentItem.url" :color="paymentItem.color"
        :icon="paymentItem.icon" :id="paymentItem.id" :callback="paymentItem.callback" />
    </li>
  </ul>
  <CommonModal>
    <fieldset class="flex justify-between items-baseline">
      <Label class="text-lg font-semibold leading-6 text-blue-marguerite-50" for="paymentTitle">Nombre </Label>
      <input id="paymentTitle"
        class=" bg-blue-marguerite-900 shadow-blue-marguerite-900 inline-flex h-[35px] w-3/4 appearance-none items-center justify-center rounded-lg px-3 text-base leading-none text-white shadow-sm outline-none focus:shadow-md selection:color-white selection:bg-blue-marguerite-900"
        type="text" v-model="paymentForm.title">
    </fieldset>
    <fieldset>

    </fieldset>
  </CommonModal>
</template>

<script setup lang="ts">
import CommonModal from '@/components/commons/CommonModal.vue';
import ClickeableCard from '@/components/bills/ClickeableCard.vue';
import usePayments from '@/composables/bills/usePayments';

const { paymentList, paymentForm } = usePayments()
</script>

<style scoped>
li {
  list-style: none;
}
</style>