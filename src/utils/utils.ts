export enum Messages {
  SUCESS_RECHARGE = 'Recarga efetuada com sucesso.',
  ERROR_RECHARGE = 'Erro ao efetuar recarga.',
  SUCESS_DISCHARGE = 'Retirada efetuada com sucesso.',
  ERROR_DISCHARGE = 'Erro ao retirar recarga.',
  SUCESS_CREATE_ACCOUNT = 'Conta criada com sucesso.',
  ERROR_CREATE_ACCOUNT = 'Erro ao criar a conta.',
  SUCESS_CREATE_USER = 'Usuario criado com sucesso.',
  ERROR_CREATE_USER = 'Erro ao criar usuario.',
  SUCESS_FIND_USER = 'Usuario buscado com sucesso.',
  ERROR_FIND_USER = 'Erro ao buscar o usuario.',
  SUCESS_FIND_ACCOUNT = 'Contas buscadas com sucesso.',
  ERROR_FIND_ACCOUNT = 'Erro ao buscar as contas.',
}

export function generateAccountNumber(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
