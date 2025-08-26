import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

// 관리자 통합계정관리의 "아이디 기억하기" ID와 WebScada 통합계정관리 ID를 따로 관리
interface GlobalState {
  isRememberId: boolean;
  isEncrypt: boolean;
  needsRegistration: boolean;
  setNeedsRegistration: (value: boolean) => void;
  setIsRememberId: (value: boolean) => void;
}

const useGlobal = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        isEncrypt: false,
        userSystemRememberId: '',
        webScadaRememberId: '',
        isRememberId: false,
        needsRegistration: false,
        setNeedsRegistration: (value) =>
          set((state) => ({ ...state, needsRegistration: value })),
        setIsRememberId: (value) =>
          set((state) => ({ ...state, isRememberId: value })),
      }),
      {
        name: 'global-storage',
        partialize: (state) => ({
          isRememberId: state.isRememberId,
        }),
      },
    ),
  ),
);

export default useGlobal;
