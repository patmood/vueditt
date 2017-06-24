<template>
  <section>
    <template v-if="post[0]">
      <header>
        <h2 class="m0">
          {{ post[0].data.title }}
        </h2>
        <div class="muted">
          {{ post[0].data.ups }}
        </div>
      </header>
    </template>
    <div>
      <comment
        v-for="comment in comments"
        :key="comment.data.id"
        :body="comment.data.body"
        :author="comment.data.author"
        :replies="comment.data.replies"
      >
      </comment>
    </div>
  </section>
</template>


<script>
import Comment from '@/components/Comment'

export default {
  name: 'content',
  data () {
    return {
      post: [],
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
      this.post = []
      this.comments = []
      this.getComments(to.params.id)
    },
  },
  components: {
    comment: Comment,
  },
}
</script>
