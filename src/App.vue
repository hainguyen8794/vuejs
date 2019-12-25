<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <h1 class="text-center">Vue Resource</h1>
        <hr>
        <div class="form-group">
        <input type="text" v-model="user.username" class="from-control">
         <input type="text" v-model="user.email" class="from-control">
         </div>
          <br>
         <div class="form-group">
             <button class="btn btn-block btn-success" type="submit" @click="submit" > Submit</button>
         </div>
        <input class="form-control" v-model="node" type="text" >

      
         <button class="btn btn-block btn-warning" @click="getAllUser" >Get All Data</button>
         <ul class="list-group">
           <li class="list-group-item" v-for="user in users" >{{user.username}} - {{user.email}}</li>
             
         </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    const customActions = {
      createItem :{
        method: 'POST',
        url:'user.json'
      },
      getNodeData:{
        method:'GET'

      }
    }
      this.resource = this.$resource('{node}.json',{}, customActions )
  },
  data(){
    return {
      user:{
        username :'',
        email:''
      },
      users:[],
      resource  :{},
      node:'user'

    }
  },
  methods:{
    submit(){
       this.resource.createItem(this.user);
  //  this.$http.post('', this.user).then(reponse=>{
  //    console.log(reponse)
  //  }, error=>{
  //    console.log(error)
  //  });
 
    },
      getAllUser(){
        
        this.resource.getNodeData({node:this.node})
        .then(response => {
         return response.json()
  }).then(data => {
     const newArr = []
       for (let key in data){
        newArr.push(data[key])
     }
       this.users = newArr

  });
        
  //         this.resource.get({}).then(response => {
  //        return response.json()
  // }).then(data => {
  //    const newArr = []
  //      for (let key in data){
  //       newArr.push(data[key])
  //    }
  //      this.users = newArr

  // });
  //     this.$http.get('').then(reponse=>{
  //    return reponse.json()
  //  }).then(data => {
  //    const newArr = []
  //     for (let key in data){
  //       newArr.push(data[key])
  //     }
  //     this.users = newArr
  //  })
   }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
