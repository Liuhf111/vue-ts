<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>
<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">我的预约系统</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"> </Icon>
            </MenuItem>
            <MenuItem name="3">
              <!-- <Icon type="ios-analytics"></Icon> -->
              <div style="margin-top:5px">
              <Badge :count="3">
                <Icon type="ios-notifications-outline" size="26"></Icon>
              </Badge>
              </div>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              退出
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                进行预约
              </template>
              <MenuItem name="1-1" @click.native="change('/nav')"
                >教师列表</MenuItem
              >
              <!-- <MenuItem name="1-2" @click.native="change('/table2')">时间列表</MenuItem> -->
              <MenuItem name="1-3" @click.native="change('/table3')"
                >院系列表</MenuItem
              >
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                预约进度
              </template>
              <MenuItem name="2-1">预约中</MenuItem>
              <MenuItem name="2-2">预约成功</MenuItem>
              <MenuItem name="2-3">预约失败</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                预约记录
              </template>
              <MenuItem name="3-1">预约成功</MenuItem>
              <MenuItem name="3-2">预约失败</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content
            :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
          >
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script lang="ts" src="./Hello.ts">
</script>
