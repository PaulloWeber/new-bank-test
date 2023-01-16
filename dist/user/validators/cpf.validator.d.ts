import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../user.service';
export declare class CpfIsUniqueValidator implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UserService);
    validate(value: any): Promise<boolean>;
}
export declare const CpfIsUnique: (validationOptions: ValidationOptions) => (object: Object, property: string) => void;
