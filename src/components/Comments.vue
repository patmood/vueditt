<template>
  <section>
    <template v-if="post[0]">
      <header class="bg-green white p2">
        <h2 class="h2 m0">
          {{ post[0].data.title }}
        </h2>
        <div class="muted">
          {{ post[0].data.ups }}
        </div>
      </header>
      <div v-if="post[0].data.selftext" class="black bg-darken-1 p2">
        {{ post[0].data.selftext }}
      </div>
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
  props: {
    postId: String,
  },
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
    this.getComments(this.postId)
  },
  watch: {
    $route: function (to, from) {
      if (to.params.postId === from.params.postId) return false
      this.post = []
      this.comments = []
      this.getComments(to.params.postId)
    },
  },
  components: {
    comment: Comment,
  },
}
</script>
