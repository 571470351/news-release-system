<template>
  <div class="background">
    <div class="formContainer">
      <h3 class="title">企业管理系统</h3>
      <el-form :rules="rules"
               ref="formRef"
               :model="form"
               label-width="80px">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="form.username"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="form.password"
                    placeholder="请输入密码"
                    show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const form = reactive({
  username: '',
  password: ''
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ]
})
const formRef = ref()
const router = useRouter()
const handleLogin = () => {
  localStorage.setItem('token', '123')
  router.push('/index')
}
const submitForm = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      handleLogin()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
.background {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #000000, $alpha: 0.5);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
}
::v-deep .el-form-item__label {
  color: white;
}
::v-deep .el-form-item__content {
  width: 100%;
}
::v-deep .el-button {
  width: 100%;
}
.title {
  font-size: 30px;
}
</style>
