import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
  } from 'typeorm';
  
  @Entity()
  export class Carro {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    brand: string;
  
  
    @Column()
    manufacture_year: string;

    @Column()
    model_year: string;

    @Column()
    date_sale: Date;

    @Column({ type: 'boolean', default: true })
    is_active: boolean;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }