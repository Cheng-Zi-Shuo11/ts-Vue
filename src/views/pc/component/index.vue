<!-- @format -->

<template>
  <div id="conponent">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class component extends Vue {}
</script>

<style lang="scss" scope></style>
