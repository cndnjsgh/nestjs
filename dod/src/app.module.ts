import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CndnjsghModule } from './cndnjsgh/cndnjsgh.module';
import { MyModule } from './my/my.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CndnjsghModule, MyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
