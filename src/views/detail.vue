<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Steps 步骤条" name="first">
		<div style="height: 300px;">
		  <el-steps direction="vertical" :active="active">
		    <el-step title="步骤 1"></el-step>
		    <el-step title="步骤 2"></el-step>
		    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
		  </el-steps>
		</div>
		<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
	</el-tab-pane>
    <el-tab-pane label="Timeline 时间线" name="second">
		<div class="block">
		  <el-timeline>
		    <el-timeline-item timestamp="2018/4/12" placement="top">
		      <el-card>
		        <h4>更新 Github 模板</h4>
		        <p>王小虎 提交于 2018/4/12 20:46</p>
		      </el-card>
		    </el-timeline-item>
		    <el-timeline-item timestamp="2018/4/3" placement="top">
		      <el-card>
		        <h4>更新 Github 模板</h4>
		        <p>王小虎 提交于 2018/4/3 20:46</p>
		      </el-card>
		    </el-timeline-item>
		    <el-timeline-item timestamp="2018/4/2" placement="top">
		      <el-card>
		        <h4>更新 Github 模板</h4>
		        <p>王小虎 提交于 2018/4/2 20:46</p>
		      </el-card>
		    </el-timeline-item>
		  </el-timeline>
		</div>
	</el-tab-pane>
    <el-tab-pane label="Calendar 日历" name="third">
		<el-calendar v-model="value">
		</el-calendar>
	</el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
		active: 0,
		value: new Date()
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.index, event);
      },
	  next() {
		  if (this.active++ > 2) this.active = 0;
		}
    }
  };
</script>

<style>
	.block{
		text-align: left;
	}
</style>
