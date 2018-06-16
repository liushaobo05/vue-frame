<template>
   <div class="item-contain">
        <div class="head">
          <h4>{{itemNum}}.{{itemDetail[itemNum - 1].topic_name}}</h4>
        </div>
        <div class="middle">
            <div v-if="itemDetail.length > 0">
                <van-radio-group v-model="radio">
                  <van-cell-group>
                    <van-cell  clickable v-for="(item, index) in itemDetail[itemNum-1].topic_answer"  @click="choosed(index, item.topic_answer_id)" :key="item.topic_id">
                      <van-radio :name="item.topic_answer_id">{{chooseType(index)}}.{{item.answer_name}}</van-radio>
                    </van-cell>
                  </van-cell-group>
                </van-radio-group>
                <div class="btn-area">
                    <van-button type="danger" v-if="itemNum < itemDetail.length" @click="nextItem">下一题</van-button>
                    <van-button type="danger" v-else @click="submitAnswer">提交</van-button>
                </div>
            </div>
        </div>
   </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex'

	export default {
	    name: 'item',
        data () {
            return {
                radio: 'aa'
            }
        },

        // 计算属性
        computed: mapState([
            'itemNum',
            'level',
            'itemDetail',
            'timer'
        ]),
        // 方法
        methods: {
        ...mapActions([
              'addNum'
            ]),
            //  点击下一题
            nextItem () {
                if (this.choosedNum !== null) {
                    this.choosedNum = null
                    // 保存答案, 题目索引加一，跳到下一题
                    this.addNum(this.choosedId)
                } else {
                    alert('您还没有选择答案哦')
                }
            },
            // 索引0-3对应答案A-B
            chooseType: type => {
                switch (type) {
                    case 0: return 'A';
                    case 1: return 'B';
                    case 2: return 'C';
                    case 3: return 'D';
                }
            },
            // 选中的答案信息
            choosed (num, id) {
                this.choosedNum = num
                this.choosedId = id
                console.log('选中的答案信息', this.choosedId)
                console.log('选中的答案index', this.choosedNum)
            },

            // 到达最后一题，交卷，请空定时器，跳转分数页面
            submitAnswer () {
                if (this.choosedNum !== null) {
                    this.addNum(this.choosedId)
                    clearInterval(this.timer)
                    this.$router.push('score')
                } else {
                    alert('您还没有选择答案哦')
                }
            },
        },
	}
</script>

<style type="text/css">
    .head h4 {
        text-align: left;
        margin-left: 16px;
    }
    .item-contain {
        margin-top: 50px;
    }
    .btn-area {
        margin-top: 30px;
    }
</style>
