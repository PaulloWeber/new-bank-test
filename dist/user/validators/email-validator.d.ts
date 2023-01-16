import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UserService } from '../user.service';
export declare class EmailIsUniqueValidator implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UserService);
    validate(value: any): Promise<boolean>;
}
export declare const EmailIsUnique: (validationOptions: ValidationOptions) => (object: Object, property: string) => void;
