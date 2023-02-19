import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ParkingCustomer extends BaseModel {
  @column({ isPrimary: true, columnName: "idParkingCustomer" })
  public idParkingCustomer: number

  @column({ columnName: 'idParking' })
  public idParking: number

  @column()
  public firstname: string

  @column()
  public secondname: string

  @column({ columnName: "licensePlate" })
  public licensePlate: string

  @column({ columnName: "contractType" })
  public contractType: number

  @column({ columnName: "contractStartDate" })
  public contractStartDate: string

  @column({ columnName: "contractEndDate" })
  public contractEndDate: string

  @column({ columnName: "parkingFloor" })
  public parkingFloor: string

  @column({ columnName: "codFloor" })
  public codFloor: string

  @column()
  public box: string

  @column()
  public value: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime

  public static table = 'parkingCustomer'
}
