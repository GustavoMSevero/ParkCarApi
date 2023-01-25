import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Parking from 'App/Models/Parking'
import { generateMD5 } from 'App/Utils/functions'
import CreateParkingValidator from 'App/Validators/CreateParkingValidator'

export default class ParkingsController {
  public async index({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateParkingValidator)

    const passwordHashed = generateMD5(data.password)

    const parkingExists = await Parking.findBy('email', data.email)

    if (parkingExists) {
      return response.conflict({ message: 'parking with this email exists' })
    }

    const createdParking = await Parking.create({ ...data, password: passwordHashed }, { allowExtraProperties: true })

    if (createdParking) {
      return response.created(createdParking)
    } else {
      return response.badRequest('something is wrong')
    }
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
