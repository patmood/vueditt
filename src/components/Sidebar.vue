<template>
  <aside :style="{width: '350px'}" class="flex-none border-right border-gray">
    <header class="flex items-center p1 bg-green white">
      <router-link :to="{ name: 'Hello' }">
        <img class="icon muted" src="/static/img/icons/home.svg"></img>
      </router-link>
      <div class="flex-auto center">
        {{ title }}
      </div>
      <img class="icon muted" src="/static/img/icons/gear.svg"></img>
    </header>
    <ol class="list-reset p0 m0">
      <li
        v-for="post in posts"
        :key="post.data.id"
        class="flex border-bottom border-gray hover"
      >
        <div class="flex-auto p1">
          <router-link
            :to="{ name: post.data.is_self ? 'Comments' : 'Article', params: { postId: post.data.id }}"
            class="text-decoration-none color-inherit"
          >
            {{ post.data.title }}
          </router-link>
          <div class="muted">
            {{ post.data.domain.toLowerCase() }}
          </div>
        </div>
        <router-link
          :to="{ name: 'Comments', params: { postId: post.data.id }}"
          class="center text-decoration-none color-inherit muted bg-darken-1 flex-none flex items-center justify-center flex-column blue"
          :style="{width: '60px'}"
        >
          <img class="icon" src="/static/img/icons/comment.svg"></img>
          <span>{{ post.data.num_comments }}</span>
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
