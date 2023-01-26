// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Parking extends BaseModel {
  @column({ isPrimary: true })
  public idParking: number

  @column()
  public idOwnerParking?: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public zipcode: string

  @column()
  public address: string

  @column()
  public addressNumber: number

  @column()
  public neighborhood: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public parkingName: string

  @column()
  public parkinPass?: number

  @column()
  public vaccantNumber: string

  @column()
  public latitude: string

  @column()
  public longitude: string

  @column()
  public CNPJ: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime

  static get table() {
    return 'parking'
  }
}
