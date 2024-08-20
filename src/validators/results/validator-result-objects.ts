import { SimpleType, ValidatorComplexResultObjects } from "../utils";

export type ValidatorResult<TV = any> = ValidatorResultObjects<TV> | ValidatorResultArrays

type ValidatorResultTemplate<SimpleType, NestedType> = {
  items?: SimpleType
  nested?: NestedType
}

export type ValidatorResultObjects<TV> =
  ValidatorResultTemplate<
    ValidatorSimpleResult[],
    ValidatorComplexResultObjects<TV>
  >

export type ValidatorSimpleResult<T = any> = {
  field: string
  value?: T
  valid?: boolean
  message?: string
}

//////////////////////

export type ValidatorResultArrays =
  ValidatorResultTemplate<
    ValidatorSimpleResult[],
    ValidatorComplexResultVFieldName[]
  >

export type ValidatorComplexResultVFieldName = {
  field: string,
  result?: ValidatorResultArrays
}
