import { Injectable } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { PrismaService } from '../prisma.service'; // <--- No olvides este import

@Injectable()
export class ContactosService {
  constructor(private prisma: PrismaService) {}

  async create(createContactoDto: CreateContactoDto) {
    return this.prisma.contacto.create({
      data: createContactoDto,
    });
  }

  async findAll() {
    return this.prisma.contacto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.contacto.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateContactoDto: UpdateContactoDto) {
    return this.prisma.contacto.update({
      where: { id },
      data: updateContactoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.contacto.delete({
      where: { id },
    });
  }
}
