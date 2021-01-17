import {MigrationInterface, QueryRunner} from "typeorm";

export class FieldEmail1610638096136 implements MigrationInterface {
    name = 'FieldEmail1610638096136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estudent" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estudent" DROP COLUMN "email"`);
    }

}
