import { Module } from '@nestjs/common';
import { CndnjsghController } from './cndnjsgh.controller';
import { CndnjsghService } from './cndnjsgh.service';

@Module({
  controllers: [CndnjsghController],
  providers: [CndnjsghService]
})
export class CndnjsghModule {}

export class People{
  name:string;
  age:number;
}