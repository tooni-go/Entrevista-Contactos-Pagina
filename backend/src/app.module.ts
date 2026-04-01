import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactosModule } from './contactos/contactos.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }), 
  ContactosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
