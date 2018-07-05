<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="1">
        <el-input placeholder="请输入内容" v-model="address">
          <template slot="prepend">ws://</template>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button>发送</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="1">
        <el-input type="textarea" v-model="message" :autosize="{minRows: 10}"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        address: 'localhost:3000',
        message: '消息'
      }
    }
  }
</script>
