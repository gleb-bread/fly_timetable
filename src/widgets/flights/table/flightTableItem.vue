<script lang="ts" setup>
import type { Props } from "./props";

import flightFrom from "./item/flightFrom.vue";
import flightTo from "./item/flightTo.vue";
import flightNumber from "./item/flightNumber.vue";
import flightType from "./item/flightType.vue";
import flightPrice from "./item/flightPrice.vue";
import flightAdd from "./item/flightAdd.vue";

const props = defineProps<Props>();
</script>

<template>
  <flightType v-bind="props" />
  <flightFrom v-bind="props" />
  <flightTo v-bind="props" />
  <flightNumber v-bind="props" />
  <flightPrice v-bind="props" />
  <flightAdd v-bind="props" />
</template>
