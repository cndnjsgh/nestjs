import { Controller , Get, Post, Body, Query } from '@nestjs/common';
import { CndnjsghService } from './cndnjsgh.service';
import { People } from './cndnjsgh.module';
import { toss } from 'src/dto/toss';
import { log } from 'src/dto/log';
import { test } from 'src/dto/test';
import { busrequestdto } from 'src/dto/bus.resquest.dto';
import { moneyrequestdto } from 'src/dto/money.request.dto';
import { fitnessrequestdto } from 'src/dto/fitness.request.dto';
@Controller('cndnjsgh')
export class CndnjsghController {
    constructor(private readonly cndnjsghService:CndnjsghService){}

    @Get('1')
    gettext():string
    {
        return this.cndnjsghService.gettext();
    }
    @Get('get') //Get 요청으로 Request를 할 때 데이터 받는 방법 중 하나 (객체X)
    findAll(@Query('name') name:string,@Query('id') id : number):string{
        return `Name : ${name}\n id : ${id}`;
    }
    @Get('Test') //Get요청으로 객체를 받는 법
    testfun(@Query() Test:test)
    {
        console.log(Test.name);
        console.log(Test.id);
    }
    @Post('Bus') //버스경로와 걸리는 시간을 알려줌 (1)
    onBus(@Body() bus:busrequestdto)
    {   
        return this.cndnjsghService.station(bus);
    }
    @Post('MONEY') //환전(2)
    onMoney(@Body() money:moneyrequestdto)
    {
        return this.cndnjsghService.moneyexchange(money);
    }
    @Post('fitness') //운동결과 어느정도의 칼로리가 소모됐는지 알려줌
    onExercise(@Body() fitness:fitnessrequestdto)
    {
        return this.cndnjsghService.kcal(fitness);
    }
    @Post('/create') //출생연도 알려줌(객체로 받고 객체로 돌려줌)
    onCreat(@Body() toto:toss) {
        console.log(toto);
        return this.cndnjsghService.todo(toto);
    }
    @Post('/name') //이름에 따라 다른 출력(객체로 받고 객체로 돌려줌)
    onName(@Body() to_name:toss){
        return this.cndnjsghService.print_text(to_name);
    }
    @Post('/Login') //로그인 성공 여부(객체로 받고 객체로 돌려줌)
    onLogin(@Body() body:log){
        return this.cndnjsghService.Login_dap(body);
    }
    }
