<!--
 * @Description: 
 * @Author: LHF
 * @Date: 2020-12-11 08:14:44
 * @LastEditTime: 2020-12-30 15:55:56
-->
<template>
  <div class="login">
    <Row style="background: #eee; padding: 20px">
      <Col span="11" offset="2">
        <Card dis-hover>
          <p slot="title">登录</p>
          <div class="input-msg">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem prop="user">
                <Input
                  type="text"
                  v-model="formInline.user"
                  placeholder="Username"
                >
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input
                  type="password"
                  v-model="formInline.password"
                  placeholder="Password"
                >
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')"
                  >Signin</Button
                >
              </FormItem>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" src="./Login.ts">
</script>
<style>
.login {
  height: 100%;
}
.ivu-row{
  height: 100%;
}
.ivu-col {
  margin: 0 auto;
  float: none;
  width: 520px;
}
.input-msg {
  width: 400px;
  margin: 30px auto;
}
</style>