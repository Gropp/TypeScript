import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
// nome da tabela no BD
@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id:number | undefined

    @Column({
        nullable:false
    })
    firstname:string | undefined

    @Column({
        nullable:false
    })
    lastname:string | undefined

    @Column({
        nullable:false,
        unique:true
    })
    email:string | undefined

    @Column({
        nullable:false
    })
    password:string | undefined
}