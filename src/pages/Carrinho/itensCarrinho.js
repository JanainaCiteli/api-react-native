import * as SQLite from 'expo-sqlite';
import { BaseModel,types, } from 'expo-sqlite-orm';

export default class ItensCarrinho extends BaseModel{

    constructor (obj){
        super(obj)
    }

    static get database(){
        return async ()=> SQLite.openDatabase('database.db');
    }

    static get tableName(){
        return 'ItensCarrinho'
    }

    static get columnMapping(){
        return{
            id: {type: types.INTEGER, primary_key: true},
            nome: {type: types.TEXT, not_null: true},
            preco: {type: types.NUMERIC, not_null: true},
            categoria: {type: types.TEXT, not_null: true},
            imagem:{type: types.TEXT},
        }
    }

}