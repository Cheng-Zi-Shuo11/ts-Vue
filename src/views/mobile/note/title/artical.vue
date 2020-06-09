<!-- @format -->

<template>
  <div id="artical">
    <div v-for="(item, index) in PropArticalContent" :key="index">
      <h3>
        {{ item.title }}
      </h3>

      <!-- <div class="content">{{ item.content }}</div> -->
      <textarea name="articalContent" id="" readonly>
          {{ item.content }}
        </textarea
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  name: "artical",
})
export default class artical extends Vue {
  @Prop({ default: [] }) private PropArticalContent!: any;

  private mounted() {}
}
</script>

<style lang="less" scope>
#artical {
  h3 {
    text-align: center;
  }

  textarea {
    width: 100%;
    height: 500px;
    border: none;
    outline: none;
  }
}
</style>
