<template>
  <section>
    <h2>comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.data.id" class="list-reset">
        {{ comment.data.body }}
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  name: 'content',
  data () {
    return {
      post: null,
      comments: [],
    }
  },
  methods: {
    getComments: function (id) {
      fetch(`https://www.reddit.com/comments/${id}.json`)
        .then(res => res.json())
        .then(json => {
          this.post = json[0].data.children
          this.comments = json[1].data.children
        })
    },
  },
  created: function () {
    this.getComments(this.$route.params.id)
  },
  watch: {
    $route: function (to, from) {
      if (to.params.id === from.params.id) return false
      this.post = null
      this.comments = []
      this.getComments(to.params.id)
    },
  },
}
</script>
