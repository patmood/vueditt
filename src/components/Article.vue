<template>
  <article>
    <div v-if="loading">
      Loadin....
    </div>
    <div v-else>
      <header class="bg-green white p2">
        <h2 class="h2 m0">
          {{ postContent.title }}
        </h2>
        <div class="muted">
          <a :href="postContent.canonicalLink" target="_blank">Open original</a>
        </div>
      </header>
      <vue-markdown v-if="postContent.text" class="black bg-darken-1 p2">
        {{ postContent.text }}
      </vue-markdown>
    </div>
  </article>
</template>

<script>
// const defaultData = () => {
//   return {
//     title: '',
//     softTitle: '',
//     date: '',
//     author: '',
//     publisher: '',
//     copyright: '',
//     favicon: '',
//     description: '',
//     keywords: '',
//     lang: '',
//     canonicalLink: '',
//     tags: '',
//     image: '',
//     videos: '',
//     links: '',
//     text: '',
//     summary: '',
//   }
// }
import VueMarkdown from 'vue-markdown'

export default {
  name: 'article',
  props: {
    postId: String,
  },
  data: function () {
    return {
      postContent: {},
      loading: true,
    }
  },
  methods: {
    getArticle: function (id) {
      fetch(`https://9gxkw5p0mi.execute-api.us-west-1.amazonaws.com/dev/article/${id}`)
        .then(res => res.json())
        .then(json => {
          this.postContent = Object.assign({}, json)
          this.loading = false
        })
    },
  },
  created: function () {
    this.getArticle(this.postId)
  },
  watch: {
    $route: function (to, from) {
      if (to.params.postId === from.params.postId) return false
      this.postContent = {}
      this.loading = false
      this.getArticle(to.params.postId)
    },
  },
  components: {
    'vue-markdown': VueMarkdown,
  },
}
</script>

<style>

</style>
