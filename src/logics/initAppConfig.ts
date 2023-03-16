import { useLoginStoreWithOut } from '@/store/login'

const LoginStore = useLoginStoreWithOut()

export function initAppConfig() {
  LoginStore.loadLocalLogin()
}
