import axios from '~/utils/axios'

export default {

    // 检查个性化海报的基本信息
    async posterIndex(urlLink) {
        const data = { fullUrl: urlLink };
        const url = '/Mobile/DiyPoster/index';
        console.log('data',data);
        console.log('url',url);
        const res = await axios.post(url, data);
        //return res;
    },
    // 获取微信上传图片
    async getPosterImage(mediaId) {
        const url = `/Mobile/DiyPoster/getPosterImage?mediaId=${mediaId}`;
        const res = await axios.get(url);
        return res;
    },

};