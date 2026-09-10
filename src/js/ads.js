const ads_text = document.getElementById('community_ads_text');
const close_ads_btn = document.getElementById('close_ads_btn')
const main_img = document.getElementById('main_png') // 注意：是 mian_png，不是main_png！

close_ads_btn.addEventListener("click", function() {
    if(!ads_text || !main_img) return;
    // 把要保留的 mian_png(main_img) 挪到 ads_text 的外面
    ads_text.before(main_img);
    // 删除 ads_text，文字、关闭按钮全部消失
    ads_text.remove();
})