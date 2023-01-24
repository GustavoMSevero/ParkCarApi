// import { DateTime } from 'luxon'
import { BaseModel, column, } from '@ioc:Adonis/Lucid/Orm'

export default class OwnerParking extends BaseModel {
  @column({ isPrimary: true })
  public idOwnerParking: number

  @column({ columnName: 'ownerName' })
  public ownerName: string

  @column({ columnName: 'ownerEmail' })
  public ownerEmail: string

  @column({ columnName: 'moreParkings' })
  public moreParkings = 0

  @column({ serializeAs: null, columnName: 'ownerPassword' })
  public ownerPassword: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime

  static get table() {
    return 'ownerParking'
  }
}
