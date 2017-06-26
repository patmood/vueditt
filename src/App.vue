<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /*color: #444;*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #ffffff;
}

img {
  max-width: 100%;
  height: auto;
}

svg {
  max-height: 100%;
}

a {
  color: #07c;
}

h1, h2, h3,
h4, h5, h6 {
  font-weight: normal;
  line-height: 1.25;
  margin-top: 1em;
  margin-bottom: .5em;
}

h1 { font-size: 2rem }

h2 { font-size: 1.5rem }

h3 { font-size: 1.25rem }

h4 { font-size: 1rem }

h5 { font-size: .875rem }

h6 { font-size: .75rem }

p, dl, ol, ul, pre, blockquote {
  margin-top: 1em;
  margin-bottom: 1em;
}

/* WHITESPACE */
.m0 { margin: 0; }
.m1 { margin: 0.5rem; }
.m2 { margin: 1rem; }
.m3 { margin: 2rem; }

.mr0 { margin-right: 0; }
.mr1 { margin-right: 0.5em; }
.mr2 { margin-right: 1em; }
.mr3 { margin-right: 2em; }

.mb0 { margin-bottom: 0; }
.mb1 { margin-bottom: 0.5rem; }
.mb2 { margin-bottom: 1rem; }

.p0 { padding: 0; }
.p1 { padding: 0.5rem; }
.p2 { padding: 1rem; }
.p3 { padding: 2rem; }

.px0 { padding-left: 0; padding-right: 0; }
.px1 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px2 { padding-left: 1rem; padding-right: 1rem; }
.px3 { padding-left: 2rem; padding-right: 2rem; }

.py0 { padding-top: 0; padding-bottom: 0; }
.py1 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py2 { padding-top: 1rem; padding-bottom: 1rem; }
.py3 { padding-top: 2rem; padding-bottom: 2rem; }

.pb0 { padding-bottom: 0; }
.pb1 { padding-bottom: 0.5rem; }
.pb2 { padding-bottom: 1rem; }
.pb3 { padding-bottom: 2rem; }

/* TYPOGRAPHY */
.muted { opacity: 0.3; }
.center { text-align: center; }

/* COLOR */
.black { color: #2c3e50; }
.blue { color: #428bca; }
.gray { color: #cccccc; }
.green { color: #4fc08d; }
.white { color: #ffffff; }
.border-gray { border-color: #cccccc; }
.bg-gray { background-color: #cccccc; }
.bg-green { background-color: #4fc08d; }
.bg-darken-1 { background-color: rgba(0, 0, 0, 0.1); }
.bg-darken-2 { background-color: rgba(0, 0, 0, 0.3); }
.bg-lighten-1 { background-color: rgba(255, 255, 255, 0.1); }
.bg-lighten-2 { background-color: rgba(255, 255, 255, 0.3); }

/* BORDERS */
.border-bottom { border-bottom-width: 1px; border-bottom-style: solid; }
.border-right { border-right-width: 1px; border-right-style: solid; }

/* FLEX */
.flex { display: flex; }
.flex-none { flex: none; }
.flex-auto { flex: 1 1 auto; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.flex-column { flex-direction: column; }

/* HELPERS */
.list-reset { list-style: none; }
.icon { width: 24px; height: 24px; }
.hover:hover { background-color: rgba(0, 0, 0, 0.03); transition: background-color 500ms; }
.pointer { cursor: pointer; }
.text-decoration-none { text-decoration: none; }
.color-inherit { color: inherit; }

/* APP SPECIFIC */
.parent-comment { border-bottom: 1px solid rgba(0,0,0,.05) }
.child-comment { border-left: 14px solid rgba(0,0,0,.05); margin-left: 1px; }

.collapse-icon { transform: rotate(0deg); transition: transform 500ms; }
.collapse-icon--collapsed { transform: rotate(90deg); transition: transform 500ms; }
</style>
