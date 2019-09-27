import axios from '~/utils/axios'

export default {
  /*
   评分接口
   param={
     token:""
   }
 */
  async ajaxGetAppraiseX(params) {
    const url = `/Mobile/PoolBind/ajaxGetAppraiseX`;
    const res = await axios.post(url, params);
    return res;
  },

  /*
获取老师个人信息
param={
 token:""
}
*/
  async teacherIntroX(params) {
    const url = `/Mobile/PoolBind/teacherIntroX`;
    const res = await axios.post(url, params);
    return res;
  },
  /*
外教标签接口
param={
token:""
}
*/
  async getTeacherLabelX(params) {
    const url = `/Mobile/PoolBind/getTeacherLabelX`;
    const res = await axios.post(url, params);
    return res;
  },
};