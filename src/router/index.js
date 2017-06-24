import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Comments from '@/components/Comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'comments/:id',
          name: 'Comments',
          component: Comments,
        },
        // TODO: add article route here
      ],
    },
  ],
})
