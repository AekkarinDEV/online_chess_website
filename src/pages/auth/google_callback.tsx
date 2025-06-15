import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { apiClient } from '../../utils/axios_instance'

export const GoogleCallback = () => {
  const location = useLocation()
  const ignore = useRef(false)

  useEffect(() => {
    if (ignore.current) return
    ignore.current = true

    const OAuthVerify = async () => {
      const [state, code] = location.search.split('&').map((item: string) => item.split('=')[1])
      console.log(code)
      console.log(state)
      //state !== localStorage.getItem('latestCSRFToken')
      if (true) {
        localStorage.removeItem('latestCSRFToken')
        const res = await apiClient.post('/api/auth/google_auth', { code })
        console.log(res)
      }
    }
    OAuthVerify()
  }, [location.search])

  return <div>google_callback</div>
}
