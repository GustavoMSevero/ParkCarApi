// import Database from '@ioc:Adonis/Lucid/Database'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OwnerParking from 'App/Models/OwnerParking'

import { generateMD5 } from 'App/Utils/functions'
import CreateOwnerParkingValidator from 'App/Validators/CreateOwnerParkingValidator'

export default class OwnerParkingsController {
  public async show({ request, response, params }: HttpContextContract) {
    const ownerParking = await OwnerParking.query().where('idOwnerParking', params.id).preload('parkings').first()

    if (!ownerParking) response.badRequest('Owner Parking Not Found')
    return ownerParking
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateOwnerParkingValidator)

    const passwordHashed = generateMD5(data.password)

    const ownerParkingExists = await OwnerParking.findBy('ownerEmail', data.email)

    if (ownerParkingExists) {
      return response.conflict({ message: 'user with this email exists' })
    }

    // const createdParking = await Database.rawQuery("INSERT INTO parkings (ownerMame, ownerEmail, ownerPassword) VALUES (?, ?, ?)", [data.name, data.email, passwordHashed])

    const createdParking = await OwnerParking.create({
      ownerName: data.name,
      ownerEmail: data.email,
      ownerPassword: passwordHashed
    })

    if (createdParking) {
      return response.created(createdParking)
    } else {
      return response.badRequest('something is wrong')
    }
  }
}
