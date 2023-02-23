import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CustomerContract extends BaseModel {
  @column({ isPrimary: true, columnName: 'idCustomerContract' })
  public idCustomerContract: number

  @column({ columnName: "idOwnerParking" })
  public idOwnerParking: number

  @column({ columnName: "contractType" })
  public contractType: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdateclear: true })
  // public updatedAt: DateTime

  public static table = 'customerContract'
}
