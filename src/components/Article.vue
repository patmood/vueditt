<template>
  <article>
    <header class="p2 muted">
      {{ postContent.title }}
    </header>
    <section class="p2">
      <div v-if="loading">
        Loadin....
      </div>
      <div v-if-else>
        {{ postContent.summary }}
      </div>
    </section>
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
}
</script>

<style>

</style>
