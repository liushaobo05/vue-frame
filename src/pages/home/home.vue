<template>
   <div class="home-contain">
        <div class="head">
          <h3>世界杯答题</h3>
        </div>
        <div class="middle">
			<van-button type="danger" size="small" @click="start">开始答题</van-button>
        </div>
   </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex'

	export default {
	    name: 'item',
        // 方法
        methods: {
            // 开始答题
            start () {
                this.$router.push('item')
            },
        },
	}
</script>

<style type="text/css">
  .home-contain {
    margin-top: 150px;
  }
  .middle {
    margin-top: 50px;
  }
</style>
