<template>
  <div>
	  <el-table
	    ref="multipleTable"
	    :data="tableData"
	    tooltip-effect="dark"
	    style="width: 100%"
		@sort-change="my_sort_change"
	    @selection-change="handleSelectionChange">
	    <el-table-column
	      type="selection"
	      width="55">
	    </el-table-column>
		<el-table-column
		  prop="updatetime"
		  label="时间"
		  sortable
		  width="200">
		</el-table-column>
	    <el-table-column
	      prop="hashId"
	      label="ID"
	      width="200">
	    </el-table-column>
	    <el-table-column
	      prop="content"
	      label="内容">
	    </el-table-column>
		<el-table-column label="操作">
		  <template slot-scope="scope">
			<el-button
			  size="mini"
			  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			<el-button
			  size="mini"
			  type="danger"
			  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		  </template>
		</el-table-column>
	  </el-table>
	 <el-pagination
	   background
	   layout="prev, pager, next"
	   @current-change="prev_page"
	   :total="1000">
	 </el-pagination>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
		fullscreenLoading: false,
		order:'asc',
        multipleSelection: []
      }
    },
	//生命周期创建
	beforeCreate: function (){
		console.log("beforeCreate")
		// this.getData(1)
	},
	created: function (){
		console.log("created")
		this.getData(1)
	},
	beforeMount: function (){
		console.log("beforeMount")
	},
	
	mounted: function () {
	console.log("mounted")
	},
	beforeUpdate: function (){
		console.log("beforeUpdate")
	},
	updated: function (){
		console.log("updated")
	},
	beforeDestroy: function (){
		console.log("beforeDestroy")
	},
	destroyed: function (){
		console.log("destroyed")
	},
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
	  //排序
   formatter(row, column) {
	   // console.log(row)
	   // console.log(column)
		  return row.address;
		},
		/*日期处理*/
		dateFormat:function(row,column){
		　　 var date = row[column.property];
			// console.log(date)
		     if(date === undefined){
		         return ''
		      } ;
		     return this.dataFormat(new Date(parseInt(date)))
		},
		//自定义排序
		my_sort_change({ column, prop, order }){
			var that = this;
			if(order == 'ascending'){
				that.order = 'asc';
			}else if(order == 'descending'){
				that.order = 'desc';
			}
			this.getData(1);
		},
		dataFormat(time){
		                return `${time.getFullYear()}-${time.getMonth() + 1 >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)}-${time.getDate() >= 10 ? time.getDate() : '0' + time.getDate()}
		                     ${time.getHours() >= 10 ? time.getHours() : '0' + time.getHours()} : ${time.getMinutes()>=10?time.getMinutes():'0'+time.getMinutes()} : ${time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()}`;
		             },
		 prev_page(page){
			 this.getData(page)
		 },
		 next_page(page){
			 this.getData(page)
		 },
		 //编辑
		 handleEdit(index,row){
			 console.log("handleEdit")
			 console.log(index)
			 console.log(row)
			 //跳转页面
			 this.$router.push({path:'/form',query:{hashId:row.hashId}});
		 },
		 //删除
		 handleDelete(index,row){
			 console.log("handleDelete")
			 console.log(index)
			 console.log(row)
			 //提示弹框
			 this.$alert('是否确定删除此信息', '提示', {
			           confirmButtonText: '确定',
			           callback: action => {
						   console.log(action)
						   //顶部消息
						   if(action == 'cancel'){
							   this.$message({
							     type: 'info',
							     message: `取消操作`
							   });
						   }else{
							   this.$message({
							     type: 'success',
							     message: `操作成功`
							   });
						   }
			             
			           }
			         });
		 },
		 getData(page){
			 //loading加载
			 const loading = this.$loading({
			           lock: true,
			           text: 'Loading',
			           spinner: 'el-icon-loading',
			           background: 'rgba(0, 0, 0, 0.7)'
			         });
			 var that = this;
			 this.$axios.get('/Joke/QueryJokeByTime?key=adf24f08cb0c433fad87f1e35772523b&page='+page+'&rows=100&sort='+that.order+'&time=1418745237')
			   .then(function (response) {
			 	console.log(response);
			 	that.tableData = response.data.result;
				//关闭loading
				loading.close();
			   })
			   .catch(function (error) {
			 	console.log(error);
			   });
		 }
    }
  }
</script>

<style>
</style>
