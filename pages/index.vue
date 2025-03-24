<template>
  <div>
    <h1>Nuxt3 Jamstack Blogs</h1>
    <ul>
      <li v-for="work in data?.contents" :key="work.id">
        <NuxtLink :to="`/${work.id}`">
          <img :src="work.main_image?.url" :width="work.main_image?.width" :height="work.main_image?.height" alt="" />
          <div>
            <ul>
              <li v-for="category in work.categories" :key="category">
                {{ category }}
              </li>
            </ul>
            <div>
              {{ work.description }}
            </div>
            <div>
              {{ work.date }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Work } from "~/types/work";

const { data } = await useMicroCMSGetList<Work>({
  endpoint: "works",
});
</script>
