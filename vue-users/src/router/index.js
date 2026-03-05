import { createRouter, createWebHistory } from "vue-router";
import AppTop from "@/views/AppTop.vue";

const router = createRouter({
  // Javascript의 history 객체와 vue router 연동
  history: createWebHistory(import.meta.env.BASE_URL), // ("/app/") 도 가능함 즉, url의 이름을 지정가능
  // route = 경로를 이용해서 컴포넌트를 실행하는 설정
  routes: [
    {
      path: "/", // 라우트의 경로(필수)
      name: "main", // 라우트의 이름(선택이지만 권장사항)
      component: AppTop, //라우트의 컴포넌트(필수)
    },
    {
      path: "/member/list",
      name: "memberList",
      // 동적으로 컴포넌트 호출, 요청하지않으면 컴포넌트 읽지 않음
      component: () => import("../views/member/MemberList.vue"),
    },
    // params : 경로에 데이터를 포함해서 전달                    /meeber/detail/1234
    // query  : 경로에 데이터를 붙여서 전달(QueryString/ db방식) /member/detail?id=1234
    {
      path: "/member/detail/:id", //params방식
      name: "memberDetail",
      // 동적으로 컴포넌트 호출, 요청하지않으면 컴포넌트 읽지 않음
      component: () => import("@/views/member/MemberDetail.vue"),
    },
    {
      path: "/member/add",
      name: "memberAdd",
      // 동적으로 컴포넌트 호출, 요청하지않으면 컴포넌트 읽지 않음
      component: () => import("@/views/member/MemberAdd.vue"),
    },
  ],
});

export default router;
