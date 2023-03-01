/** 
 * Representa o status de um HTTP-FETCH, ou seja, requisições HTTP feitas pelos serviços e apis. 
 * Toda requisição vai estar em um dos 4 estados
 * 
 * @idle - Nenhuma requisição foi feita, ou seja no "aguardo".
 * @loading - A requisição acabou de ser feita e está aguardando um retorno. Geralmente utiliza um LOADING para avisar ao usuário que estamos esperando um retorno
 * @success - A requisição retornou com um SUCESSO, ou seja, tudo que estiver com "StatusCode" na casa de 2XX.
 * @error - A requisição retornou com um ERRO, ou seja, tudo que estiver com "StatusCode" não estiver na casa de 2XX. Os mais comuns são na casa de 4XX e 5XX.
 */
export type FetchStatus = "idle" | "loading" | "success" | "error"

export type FetchAndUpdateStatus = FetchStatus | "update-loading" | "update-success"

export interface Entity<T> {
  [key: string]: T
}

interface State {
  status: FetchStatus
  error?: string
}

export interface EntityState<T> extends State {
  entities: Entity<T>
}
export interface EntityArrayState<T> extends State {
  entities: T[]
}