<template>
  <Menu v-bind:theme="theme2" active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <MenuItem name="1-2">
        <router-link to="demo1">
          评论管理1
        </router-link>

      </MenuItem>
      <MenuItem name="1-3">
        <router-link to="demo2">
        评论管理2
      </router-link></MenuItem>
      <!--<template slot="title">-->
        <!--<Icon type="ios-paper" />-->
        <!--内容管理-->
      <!--</template>-->
      <!--<MenuItem name="1-1">文章管理</MenuItem>-->
      <!--<MenuItem name="1-2">评论管理</MenuItem>-->
      <!--<MenuItem name="1-3">举报管理</MenuItem>-->
    </Submenu>

  </Menu>
</template>

<script>
    import axiso from 'axios';
    export default {
        name: "side-meau",
        data(){
          return {

          }
        },
    }
</script>

<style scoped>

</style>
