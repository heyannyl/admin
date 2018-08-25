<template>
  <Layout style="height: 100%" class="main">
    <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu @on-select="turnToPage">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <content-header></content-header>
      </Header>
      <Content class="main-content-con">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
  import SideMenu from '@/components/sidemenu'
  import ContentHeader from '@/components/contentHeader'
  export default {
    name: 'Main',
    components: {
      SideMenu,
      ContentHeader
      // HeaderBar,
      // Language,
      // TagsNav,
      // Fullscreen,
      // User
    },
    data () {
      return {
        collapsed: false,
        isFullscreen: false
      }
    },
    computed: {
      tagNavList () {
        return this.$store.state.app.tagNavList
      },
      tagRouter () {
        return this.$store.state.app.tagRouter
      },
      userAvator () {
        return this.$store.state.user.avatorImgPath
      },
      cacheList () {
        return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
      },
      menuList () {
        return this.$store.getters.menuList
      },
      local () {
        return this.$store.state.app.local
      }
    },
    methods: {
      turnToPage (route) {
        let { name, params, query } = {}
        if (typeof route === 'string') name = route
        else {
          name = route.name
          params = route.params
          query = route.query
        }
        if (name.indexOf('isTurnByHref_') > -1) {
          window.open(name.split('_')[1])
          return
        }
        this.$router.push({
          name,
          params,
          query
        })
      },
    }

  }
</script>
