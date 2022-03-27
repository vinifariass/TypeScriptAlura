import { Imprimivel } from '../utils/imprimivel.js'
import { Comparavel } from '../interfaces/comparavel.js'
export interface Modelo<T> extends Imprimivel,Comparavel<T> {
 
}