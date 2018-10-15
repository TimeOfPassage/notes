<template>
  <div id="app">
    <tool-bar></tool-bar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import ToolBar from './component/ToolBar'
import NotesList from './component/NotesList'
import Editor from './component/Editor'
export default {
  name: 'app',
  components: {
  	ToolBar,
  	NotesList,
  	Editor
  }
}
</script>

<style lang="scss">
  #app{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background: #fff;
  }
</style>
