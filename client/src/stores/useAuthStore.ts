import { getInitialUser } from '@/lib/auth';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserDataObjectType = {
  userId: string;
  sessionId: string;
  dueExpiredPassword?: boolean; //CFR PART 11 옵션중에 비밀번호변경주기 옵션활성화일때 나타나는 옵션
};

export type UserDataType = {
  data: UserDataObjectType;
};

type AuthStateTypeProps = {
  user: UserDataType | null;
  socketConnectionStatus: 'connected' | 'disconnected' | 'error' | 'pending';
  attemptReconnect: number;
  setUser: (user: UserDataType | null) => void;
  initializeSocketConnection: () => void; // 앱 시작 시 소켓 연결 상태 초기화
};
const loginUser = getInitialUser();

const useAuthStore = create<AuthStateTypeProps>()(
  persist(
    (set, get) => ({
      user: loginUser,
      socketConnectionStatus: 'pending',
      attemptReconnect: 0,
      setUser: (user) => {
        // 유저 정보 설정
        set({ user });
      },
      initializeSocketConnection: () => {
        // 앱 시작 시 유저 정보가 있으면 소켓 연결
        const currentUser = get().user;
        if (currentUser) {
          // 모든 이벤트 리스너 제거 후 다시 등록
          // 연결 성공 시
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    },
  ),
);

export default useAuthStore;
