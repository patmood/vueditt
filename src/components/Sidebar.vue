<template>
  <aside>
    <ol>
      <li v-for="post in posts" :key="post.data.id">
        {{ post.data.title }}
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
    fetch(`https://www.reddit.com/.json`)
      .then(res => res.json())
      .then(json => { this.posts = json.data.children })
  },
}
</script>
