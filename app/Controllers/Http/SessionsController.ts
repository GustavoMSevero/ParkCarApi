import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import OwnerParking from 'App/Models/OwnerParking';
import Parking from 'App/Models/Parking';
import { generateMD5 } from 'App/Utils/functions';
import { JsonWebTokenUtils } from 'App/Utils/jwt';

export default class SessionsController {
  private jwt = new JsonWebTokenUtils

  public async loginParking({ request, response }: HttpContextContract) {
    const { email, password } = request.body();

    const hashedPassword = generateMD5(password)

    // const user = await Database.rawQuery("SELECT op.idOwnerParking, op.ownerName, p.parkingName, p.idParking, op.ownerEmail FROM ownerParking op, parking p WHERE op.ownerEmail=? AND op.ownerPassword=? AND p.idOwnerParking = op.idOwnerParking", [email, hashedPassword])

    const user = await OwnerParking.query().where('ownerEmail', email).andWhere('ownerPassword', hashedPassword)

    console.log(user.length)

    if (!user.length) {
      return response.status(404).json({
        message: 'user not found',
        error: true
      })
    }

    return response.send({
      token: await this.jwt.generate(user[0][0]),
      user
    })
  }

  public async loginClient({ request, response }: HttpContextContract) {
    const { email, password } = request.body();

    const hashedPassword = generateMD5(password)


  }
}
