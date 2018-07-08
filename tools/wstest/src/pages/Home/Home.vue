<template>
  <div>
    <el-row>
      <el-col :span="2">
        服务器地址
      </el-col>
      <el-col :span="14">
        <el-input placeholder="请输入内容" v-model="address">
          <template slot="prepend">ws://</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        入参
      </el-col>
      <el-col :span="14">
        <el-input placeholder="请输入内容" v-model="params">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button @click="btnConnect">连接</el-button>
        <el-button @click="btnClose">断开</el-button>
        <el-button @click="btnSend">发送</el-button>
        <el-button @click="btnCreate">创建</el-button>
        <el-button @click="btnJoin">加入</el-button>
        <el-button @click="btnReqJoin">申请加入</el-button>
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
  import * as Colyseus from 'colyseus.js';

  export default {
    data() {
      return {
        address: 'localhost:3000',
        message: '消息',
        params:'',
        client:null,
        room:null,
      }
    },
    methods:{
      btnConnect(){
        const host = window.document.location.host.replace(/:.*/, '');
        const port =3000;
        let server=`${location.protocol.replace('http','ws')}//${host}:${port}`
        // this.client=new Colyseus.Client('ws://localhost:3000');
        if(this.address!=''){
          server=`ws://${this.address}`
        }
        this.client= new Colyseus.Client(server);
        this.client.onOpen.add(()=>{
          this.message+='\n connected';
        });
        this.client.onClose.add(()=>{
          this.message+='\n close';
        });
      },
      btnClose(){
        this.client.close();
      },
      btnSend(){

      },
      btnCreate(){
        this.client && this.client.join('battle',{create:true})
      },
      btnReqJoin(){
        this.client && this.client.join('battle')
      },
      btnJoin(){
        this.client && this.client.join('battle')
      }

    }
  }
</script>
<style lang="less">
  .el-row {
    margin-bottom: 10px;
  &:last-child {
      margin-bottom: 0;
    }
  }
</style>
