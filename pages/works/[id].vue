<template>
  <div>
    <h1>Nuxt3 Jamstack Blogs</h1>
    <img :src="data.main_image?.url" :width="data.main_image?.width" :height="data.main_image?.height" alt="" />
    <div>
      <ul>
        <li v-for="category in data.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <div>
        {{ data.description }}
      </div>
      <div>
        {{ data.date }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Work } from "~/types/work";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Work>({
  endpoint: "works",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>
