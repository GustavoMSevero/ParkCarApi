import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'

export class JsonWebTokenUtils {
  private expiresIn = '7d'

  public async generate(payload: any = {}) {
    return jwt.sign(payload, Env.get('JWT_SECRET'), {
      expiresIn: this.expiresIn,
    })
  }

  public async verify(token: string) {
    return jwt.verify(token, Env.get('JWT_SECRET'))
  }
}
