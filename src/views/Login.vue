<template>
    <div v-title data-title="登录">
      <Nav />
      <div class="login">
        <el-form :model="userInfo" status-icon :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="邮件地址" prop="username">
            <el-input v-model="userInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    Nav
  },
data() {
        let validatePassword = (rule, value, callback) => {
          if(value === ''){
            callback(new Error('请输入密码'));
          } else if(value.length < 6){
            callback(new Error('密码不得少于6位'));
          }else{
            callback();
          }
        }
        let validateUsername =(rule, value, callback) => {
          if(value === ''){
            callback(new Error('请输入用户名'));
          } else if(value.length < 4){
            callback(new Error('用户名不得少于4位'));
          }else{
            callback();
          }
        }
      return {
        userInfo: {
          password: '',
          username: ''
        },
        rules: {
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ]
        }
      };
    },
methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
.login{
  width: 500px;
  margin: 100px auto;
  height: 170px;
}
</style>
