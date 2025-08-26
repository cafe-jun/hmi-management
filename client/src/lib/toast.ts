import { toast } from 'react-toastify';

// Notification Msg
class ToastMsg {
  logout() {
    toast.success('로그아웃이 되었습니다.');
  }

  changePassword() {
    toast.success('비밀번호가 변경되었습니다.');
  }
}

export default new ToastMsg();
