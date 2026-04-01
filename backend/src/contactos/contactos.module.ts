import { Module } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { ContactosController } from './contactos.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ContactosController],
  providers: [ContactosService, PrismaService],
})
export class ContactosModule {}
