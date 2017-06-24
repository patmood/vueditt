<template>
  <div :class="{ 'child-comment': isChild }">
    <header class="bg-darken-1">
      {{ author }}
    </header>
    <div>
      <div>
        {{ body }}
      </div>
      <template v-if="childComments.length">
        <comment
          v-for="comment in childComments"
          :key="comment.data.id"
          :body="comment.data.body"
          :author="comment.data.author"
          :replies="comment.data.replies"
          :is-child="true"
        >
        </comment>
      </template>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/Comment'

export default {
  name: 'comment',
  props: {
    author: String,
    body: String,
    replies: [String, Object], // The last child has empty string
    isChild: Boolean,
  },
  computed: {
    childComments: function () {
      if (!this.replies) return []
      return this.replies.data.children
    },
  },
  components: {
    comment: Comment,
  },
}
</script>

<style>

</style>
