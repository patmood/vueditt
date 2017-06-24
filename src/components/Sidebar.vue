<template>
  <aside :style="{width: '300px'}" class="flex-none">
    <ol>
      <li v-for="post in posts" :key="post.data.id">
        <router-link :to="{ name: 'Comments', params: { id: post.data.id }}">
          {{ post.data.title }}
        </router-link>
      </li>
    </ol>
  </aside>
</template>


<script>
export default {
  name: 'sidebar',
  data () {
    return {
      posts: [],
    }
  },
  created: function () {
    const subreddit = this.$route.query.subreddit
    const path = subreddit ? `r/${subreddit}.json` : '.json'
    fetch(`https://www.reddit.com/${path}`)
      .then(res => res.json())
      .then(json => { this.posts = json.data.children })
  },
}
</script>
