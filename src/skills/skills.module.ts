import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Skill } from './skills.model';

@Module({
  imports: [SequelizeModule.forFeature([Skill])],
  exports: [SequelizeModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
