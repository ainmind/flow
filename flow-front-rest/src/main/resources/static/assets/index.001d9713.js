import{k as n,bm as a,r as o,K as e,o as r,n as t,P as d,q as i}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as l}from"./PageWrapper.5ef0540d.js";import s from"./DynamicInfo.ff400ac0.js";import m from"./BannerInfo.0433f91a.js";import c from"./NoticeInfo.e1a1c827.js";import f from"./ITWikiCard.7edf9c79.js";import g from"./ITContactCard.47f45d49.js";import p from"./CommonDownCard.c07373d3.js";import{dynamicInfoItems as u,bannerList as I,noticeInfoItems as j}from"./data.cc04bca7.js";import"./index.dd44fc8e.js";import"./usePageContext.913e3c16.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              *//* empty css              *//* empty css              */var y=n({components:{PageWrapper:l,DynamicInfo:s,BannerInfo:m,NoticeInfo:c,ITWikiCard:f,ITContactCard:g,CommonDownCard:p,Card:a},setup(){const n=o(!0);return setTimeout((()=>{n.value=!1}),1500),{loading:n,dynamicInfoItems:u,bannerInfoItems:I,noticeInfoItems:j}}});const C={class:"lg:flex"},w={class:"lg:w-2/10 w-full !mr-4 mt-4 enter-y"},x={class:"lg:w-4/10 w-full !mr-4 enter-y"},v={class:"lg:w-4/10 w-full enter-y"},b={class:"lg:flex"},T={class:"lg:w-2/10 w-full !mr-4 enter-y"},D={class:"lg:w-8/10 w-full enter-y"},S=i("div",{class:"lg:flex mt-4"},[i("div",{class:"lg:w-10/10 w-full enter-y"})],-1);y.render=function(n,a,o,l,s,m){const c=e("ITWikiCard"),f=e("BannerInfo"),g=e("NoticeInfo"),p=e("ITContactCard"),u=e("DynamicInfo"),I=e("CommonDownCard"),j=e("PageWrapper");return r(),t(j,null,{default:d((()=>[i("div",C,[i("div",w,[i(c,{loading:n.loading,class:"enter-y"},null,8,["loading"])]),i("div",x,[i(f,{dataSource:n.bannerInfoItems,height:"270",class:"!my-4 enter-y",loading:n.loading},null,8,["dataSource","loading"])]),i("div",v,[i(g,{dataSource:n.noticeInfoItems,loading:n.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])]),i("div",b,[i("div",T,[i(p,{loading:n.loading,class:"enter-y"},null,8,["loading"])]),i("div",D,[i(u,{dataSource:n.dynamicInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"]),i(I,{loading:n.loading,class:"enter-y !mt-4"},null,8,["loading"])])]),S])),_:1})};export default y;
