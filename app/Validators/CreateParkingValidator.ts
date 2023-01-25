import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateParkingValidator {
  constructor(protected ctx: HttpContextContract) { }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    idOwnerParking: schema.number.optional(),
    zipcode: schema.string(),
    address: schema.string(),
    addressNumber: schema.number(),
    neighborhood: schema.string(),
    city: schema.string(),
    state: schema.string([rules.maxLength(2), rules.minLength(2)]),
    parkingName: schema.string.optional(),
    parkingPass: schema.number.optional(),
    email: schema.string(),
    password: schema.string(),
    vaccantNumber: schema.string.optional(),
    latitude: schema.string.optional(),
    longitude: schema.string.optional(),
    CNPJ: schema.string.optional()

  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
