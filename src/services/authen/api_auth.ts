import type { IFormDataSignUp } from '../../pages'
import { apiClient } from '../../utils/axios_instance'

interface IResponeSignUp {
  messege: string
}

class ApiAuth {
  public signUp = async (formData: IFormDataSignUp): Promise<IResponeSignUp> => {
    const { data } = await apiClient.post('/auth/sign_up', formData)
    return data
  }
}

export const apiAuth = new ApiAuth()
