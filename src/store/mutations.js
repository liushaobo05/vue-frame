import {
    ADD_ITEMNUM,
    REMBER_ANSWER,
    REMBER_TIME
} from './mutation-types.js'

export default {
    // 下一题
    [ADD_ITEMNUM] (state, num) {
        state.itemNum += num;
    },

    // 记录答案
    [REMBER_ANSWER] (state, id) {
        state.answerid.push(id);
    },

    /*
    记录做题时间
     */
    [REMBER_TIME] (state) {
        state.timer = setInterval(() => {
            state.allTime++;
        }, 1000)
    }
}
