import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from "typeorm"
import hashPassword from "../util/hashPassword"

@Entity("user_c")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "character varying",
        length: 20
    })
    name: string

    @Column({
        type: "character varying",
        length: 20
    })
    surname: string

    @Column({
        type: "character varying",
        length: 20,
        nullable: true
    })
    phone: string

    @Column({
        type: "character varying",
        length: 20,
        unique: true
    })
    email: string

    @Column({
        type: "character varying",
        length: 100
    })
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashPassword(this.password)
    }
}