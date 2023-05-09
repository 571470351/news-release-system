<template>
  <el-aside width="200px">
    <el-menu>
      <el-menu-item index="/index">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><avatar/></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-sub-menu index="/user-manger">
        <template #title>
          <el-icon>
            <user-filled />
          </el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user-manger/adduser">添加用户</el-menu-item>
        <el-menu-item index="/user-manger/userlist">用户列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/news-manger">
        <template #title>
          <el-icon>
            <message-box />
          </el-icon>
          <span>新闻管理</span>
        </template>
        <el-menu-item index="/news-manger/addnews">创建新闻</el-menu-item>
        <el-menu-item index="/news-manger/newslist">新闻列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/product-manger">
        <template #title>
          <el-icon>
            <reading />
          </el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/product-manger/addproduct">创建产品</el-menu-item>
        <el-menu-item index="/product-manger/productlist">产品列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import {HomeFilled,Avatar,UserFilled,MessageBox,Reading,Pointer} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
}
</style>