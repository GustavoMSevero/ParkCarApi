import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomerContract from 'App/Models/CustomerContract'
import CreateCustomerContractValidator from 'App/Validators/CreateCustomerContractValidator'

export default class CustomerContractsController {
  public async index({ }: HttpContextContract) {
    return CustomerContract.all()
  }

  public async create({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateCustomerContractValidator)

    const customerContract = await CustomerContract.create(data)

    return response.created(customerContract)
  }

  public async show({ params }: HttpContextContract) {
    return CustomerContract.find(params.id)
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
