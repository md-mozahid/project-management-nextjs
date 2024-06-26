import { UserModel } from '@/models/user-model'
import { replaceMongoIdInObject } from '@/utils/convertData'

export async function getUserByEmail(email) {
  const user = await UserModel.findOne({ email: email })
  return replaceMongoIdInObject(user)
}
