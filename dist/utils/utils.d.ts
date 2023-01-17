export declare enum Messages {
    SUCESS_RECHARGE = "Recarga efetuada com sucesso.",
    ERROR_RECHARGE = "Erro ao efetuar recarga.",
    SUCESS_DISCHARGE = "Retirada efetuada com sucesso.",
    ERROR_DISCHARGE = "Erro ao retirar recarga.",
    SUCESS_CREATE_ACCOUNT = "Conta criada com sucesso.",
    ERROR_CREATE_ACCOUNT = "Erro ao criar a conta.",
    SUCESS_CREATE_USER = "Usuario criado com sucesso.",
    ERROR_CREATE_USER = "Erro ao criar usuario.",
    SUCESS_FIND_USER = "Usuario buscado com sucesso.",
    ERROR_FIND_USER = "Erro ao buscar o usuario.",
    SUCESS_FIND_ACCOUNT = "Contas buscadas com sucesso.",
    ERROR_FIND_ACCOUNT = "Erro ao buscar as contas.",
    ERROR_DISCHARGE_BALANCE = "Erro! Saldo insuficiente."
}
export declare function generateAccountNumber(length: any): string;
