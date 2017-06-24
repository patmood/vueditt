<template>
  <aside :style="{width: '300px'}" class="flex-none border-right border-gray">
    <header class="flex items-center p1 bg-green white">
      <router-link :to="{ name: 'Hello' }">Home</router-link>
      <div class="flex-auto center">
        {{ title }}
      </div>
    </header>
    <ol class="list-reset p0 m0">
      <li
        v-for="post in posts"
        :key="post.data.id"
        class="flex border-bottom border-gray hover"
      >
        <div class="flex-auto p1">
          <div>
            {{ post.data.title }}
          </div>
          <div class="muted">
            {{ post.data.domain.toLowerCase() }}
          </div>
        </div>
        <router-link
          :to="{ name: 'Comments', params: { id: post.data.id }}"
          class="center text-decoration-none color-inherit muted bg-darken-1"
        >
          {{ post.data.num_comments }}
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
  computed: {
    title: function () {
      const subreddit = this.$route.query.subreddit
      return subreddit || 'Front page'
    },
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
