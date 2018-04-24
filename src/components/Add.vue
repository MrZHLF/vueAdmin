<template>
  <div class="add container">
      <Alert v-if="alert" :message="alert"></Alert>
       <h1 class="page-header">添加用户</h1>
       <form v-on:submit="addCustomer">
           <div class="well">
               <h4>用户信息</h4>
               <div class="form-group">
                   <label>姓名</label>
                   <input type="text" class="form-control" placeholder="name" v-model="customer.name">
               </div>
               <div class="form-group">
                   <label>电话</label>
                   <input type="phone" class="form-control" placeholder="phone" v-model="customer.phone">
               </div>
               <div class="form-group">
                   <label>邮箱</label>
                   <input type="email" class="form-control" placeholder="email" v-model="customer.email">
               </div>
               <div class="form-group">
                   <label>学历</label>
                   <input type="text" class="form-control" placeholder="education" v-model="customer.education">
               </div>
               <div class="form-group">
                   <label>毕业学校</label>
                   <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
               </div>
               <div class="form-group">
                   <label>个人简介</label>
                   <textarea  class="form-control" v-model="customer.profile"  rows="10"></textarea>
               </div>
               <button style="submit" class="btn btn-primary">添加</button>
           </div>
       </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Add',
  data () {
    return {
      customer: {},
      alert: ""
    }
  },
  components:{
    Alert
  },
  methods: {
      addCustomer (e) {
          if (!this.customer.name || !this.customer.phone || !this.customer.email) {
            //   alert("不能为空")
            console.log("不能为空")
            this.alert = "不能为空"
          } else {
              let newCustomer = {
                  name:this.customer.name,
                  email: this.customer.email,
                  phone: this.customer.phone,
                  education: this.customer.education,
                  graduationschool:this.customer.graduationschool,
                  profession:this.customer.profession,
                  profile: this.customer.profile
              }
              this.$http.post("http://localhost:3000/users",newCustomer).then(res => {
                  console.log(res)
                  this.$router.push({path: "/", query:{alert:"用户信息添加成功!"}})
              })
              e.preventDefault();
          }
          e.preventDefault();
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
