<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
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
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /*color: #444;*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
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

/* TYPOGRAPHY */
.muted { opacity: 0.3; }
.center { text-align: center; }

/* COLOR */
.blue { color: #428bca; }
.gray { color: #cccccc; }
.border-gray { border-color: #cccccc; }
.bg-gray { background-color: #cccccc; }
.bg-darken-1 { background-color: rgba(0, 0, 0, 0.1); }
.bg-darken-2 { background-color: rgba(0, 0, 0, 0.3); }


/* BORDERS */
.border-bottom { border-bottom-width: 1px; border-bottom-style: solid; }
.border-right { border-right-width: 1px; border-right-style: solid; }

/* FLEX */
.flex { display: flex; }
.flex-none { flex: none; }
.flex-auto { flex: 1 1 auto; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }

/* HELPERS */
.list-reset { list-style: none; }
.icon { width: 24px; height: 24px; }
.hover:hover { background-color: rgba(0, 0, 0, 0.1); transition: background-color 500ms; }
.pointer { cursor: pointer; }
.text-decoration-none { text-decoration: none; }
.color-inherit { color: inherit; }

/* APP SPECIFIC */
.parent-comment { border-bottom: 1px solid rgba(0,0,0,.05) }
.child-comment { border-left: 14px solid rgba(0,0,0,.05); margin-left: 1px; }

.collapse-icon { transform: rotate(0deg); transition: transform 500ms; }
.collapse-icon--collapsed { transform: rotate(90deg); transition: transform 500ms; }
</style>
