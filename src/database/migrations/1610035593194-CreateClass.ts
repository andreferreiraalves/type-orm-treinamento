import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1610035593194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'class',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                    // generationStrategy: "uuid",
                    // default: 'uuid_generate_v4()'
                }, {
                    name: 'name',
                    type: 'varchar'
                }, {
                    name: 'duracao',
                    type: 'integer'
                }, {
                    name: 'created_At',
                    type: 'timestamp',
                    default: 'now()'
                }, {
                    name: 'updated_At',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('class');
    }

}
