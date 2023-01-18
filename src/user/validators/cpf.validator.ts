import { Injectable } from '@nestjs/common'
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { UserService } from '../user.service'

@Injectable()
@ValidatorConstraint({ async: true })
export class CpfIsUniqueValidator implements ValidatorConstraintInterface {
  constructor (private readonly userService: UserService) {}

  async validate (value: any): Promise<boolean> {
    const user = (await (
      await this.userService.findByCPF(value)
    ).content)

    if (user !== null) return false
    return true
  }
}

export const CpfIsUnique = (validationOptions: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: CpfIsUniqueValidator
    })
  }
}
