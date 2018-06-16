<template>
	<div>你的分数{{score}}</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex'

	export default {
		data () {
			return {
				score: 0,
				rightAnswer: [2, 7, 12, 13, 18]
			}
		},
		computed: mapState(['answerid']),
		created () {
			this.computedScore()
		},
		methods: {
            // 计算分数
	        computedScore () {
	            this.answerid.forEach((item, index) => {
	                if (item === this.rightAnswer[index]) {
	                    this.score += 20;
	                }
	            })
	        }
		}
	}
</script>
