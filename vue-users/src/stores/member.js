import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useMemberStore = defineStore(
  "member",
  () => {
    // state
    // 전체 회원 (MemberList.vue)
    const members = ref([]);
    // 회원 정보 (MemberDetail.vue)
    const member = ref({});
    // getters
    // 전체 회원 수
    const count = computed(() => {
      return members.value.length;
    });

    // action
    // 서버에서 전체 회원 정보 가져오기
    const fineMemberList = async () => {
      let list = await fetch(`/fallback/users`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      members.value = list;
      // counterStore.count = members.value.length;
    };
    // 서버에서 지정한 회원의 상세정보 가져오기
    const findMemberById = async (id) => {
      // 단건조회
      let info = await fetch(`/fallback/users/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      member.value = info;
    };
    // 서버에 회원 정보 등록하기
    const createMember = async (memberInfo) => {
      let info = await fetch(`/fallback/users`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(memberInfo), // member 사용하면 안됨 내부에 있는 데이터를 사용하면 x
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return info.id;
    };
    return {
      members,
      member,
      count,
      fineMemberList,
      findMemberById,
      createMember,
    };
  },
  {
    persist: true, // 상태 자동 저장 활성화
  },
);
