import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ParkingCustomer from 'App/Models/ParkingCustomer'
import CreateParkingCustomerValidator from 'App/Validators/CreateParkingCustomerValidator'

export default class ParkingCustomersController {
  public async index({ }: HttpContextContract) {
    return ParkingCustomer.all()
  }

  public async create({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateParkingCustomerValidator)

    const createdParkingCustomer = await ParkingCustomer.create(data)

    return response.created(createdParkingCustomer)
  }

  public async show({ params }: HttpContextContract) {
    return ParkingCustomer.find(params.id)
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
