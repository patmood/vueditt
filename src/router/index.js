import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Comments from '@/components/Comments'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'comments/:postId',
          name: 'Comments',
          component: Comments,
          props: true,
        },
        {
          path: 'article/:postId',
          name: 'Article',
          component: Article,
          props: true,
        },
      ],
    },
  ],
})
