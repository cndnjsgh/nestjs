import { Injectable,HttpCode} from '@nestjs/common';
import { People } from './cndnjsgh.module';
import { toss } from 'src/dto/toss';
import { totototo } from 'src/dto/toss';
import { ptext } from 'src/dto/ptext';
import { log } from 'src/dto/log';
import { LoginResponseDto } from 'src/dto/login.response.dto';
import { busrequestdto } from 'src/dto/bus.resquest.dto';
import { busresponsedto } from 'src/dto/bus.response.dto';
import { moneyrequestdto } from 'src/dto/money.request.dto';
import { moneyresponsedto } from 'src/dto/money.response.dto';
import { AsyncLocalStorage } from 'async_hooks';
import { zip } from 'rxjs';
import { fitnessrequestdto } from 'src/dto/fitness.request.dto';
import { fitnessresponesdto } from 'src/dto/fitnessresponse.dto';
@Injectable()
export class CndnjsghService {
    private arr:People[]=[
    {name:'추원호',age:22},
    ];
    public exid:log={
        ID:20233106,
        password:'cndnjsgh'
    };
    private route23:string[]=[
        '감만동','감만시장','감만창의문화촌','우암초등학교','7부두','문현교차로','부산진성공원','국민은행범일동지점',
        '중앙시장','범내골역','서면역','롯데백화점','진양교차로','부산진구생활문화센터','청수탕','백양뜨란채아파트','선암사입구','국제백양아파트',
        '개금주공아파트','부산진구우체국'
    ]
    private route169:string[]=[
        '당감4동기정','선암사입구','백양맨션','협성피닉스','부암3동주민센터','개금주공아파트','개금역','주례역','감전역','사상역',
        '부산항공고등학교','모라농협','구남역','구명역','구포시장입구','덕천교차로','구포시장종점','덕천역','덕천구종아파트','만덕그린코아',
        '대성아파트입구','만덕역','만덕2동행정복지센터','백양디이스트아파트','만덕그린코아'
    ]
    gettext():string{
        return 'welcome to dod dream load!'
    }
    CreatHuman(name:string,age:number):People{
        const human:People={
            name,
            age,
        };
        human.age+=10;
        this.arr.push(human);
        return human;
    }
    todo(toto:toss): totototo
    {
        const human2 : totototo = new totototo();
        human2.name=toto.name;
        human2.year=2026-toto.age;
        return human2;
    }
    print_text(to_name:toss):ptext{
        const print : ptext = new ptext();
        if(to_name.name==="추원호")
        {
            print.text="안녕하세요 20233106님!";
            return print;
        }
        else if(to_name.name==="박찬민")
        {
            print.text="안녕하세요 24학번 박찬민님!";
            return print;
        }
        else
        {
            print.text="잘못된 이름입니다!";
            return print;
        }
    }
    Login_dap(body:log):LoginResponseDto{
        const print_text : LoginResponseDto= new LoginResponseDto();

        const isCorrectId: boolean = this.exid.ID === body.ID;
        const isCorrectPassword: boolean = this.exid.password === body.password;

        if(isCorrectId && isCorrectPassword)
        {
            print_text.text='로그인에 성공하였습니다!';
        }
        else {
            print_text.text='일치하는 회원을 찾을 수 없습니다';     
        }
        return print_text;
    }
    station(bus:busrequestdto):busresponsedto{
        const busstation:busresponsedto = new busresponsedto();
        let busid=bus.busID;
        let startfind:boolean=false;
        let endfind:boolean=false;
        let revers:boolean=false;
        let count:number=0;
        let startnum:number=0;
        let endnum:number=0;
        if(busid===23)
        {
            for(let i=0;i<20;i++)
            {
                if(bus.start===this.route23[i])
                {
                    startfind=true;
                    startnum=i;
                }
                if(bus.end===this.route23[i])
                {
                    endfind=true;
                    endnum=i;
                }
            }
            if(endnum<startnum)
            {
                revers=true;
            }
            if(startfind&&endfind&&!revers)
            {
                for(let i=startnum;i<=endnum;i++)
                {
                    busstation.station[count++]=this.route23[i];
                }
            }
            else if(startfind&&endfind&&revers)
            {
                for(let i=startnum;i>=endnum;i--)
                {
                    busstation.station[count++]=this.route23[i];
                }
            }
        }
        else if(busid===169)
        {
           for(let i=0;i<25;i++)
            {
                if(bus.start===this.route169[i])
                {
                    startfind=true;
                    startnum=i;
                }
                if(bus.end===this.route169[i])
                {
                    endfind=true;
                    endnum=i;
                }
            }
            if(endnum<startnum)
            {
                revers=true;
            }
            if(startfind&&endfind&&!revers)
            {
                for(let i=startnum;i<=endnum;i++)
                {
                    busstation.station[count++]=this.route169[i];
                }
            }
            else if(startfind&&endfind&&revers)
            {
                for(let i=startnum;i>=endnum;i--)
                {
                    busstation.station[count++]=this.route169[i];
                }
            }
        }
        else
        {
            busstation.station[count]='버스번호를 찾을 수 없습니다!';
            busstation.time=0;
            return busstation;
        }
        if(!startfind||!endfind)
        {
            busstation.station[count]='잘못된 입력입니다!';
        }
        busstation.time=count*3;
        return busstation;
    }
    moneyexchange(money:moneyrequestdto):moneyresponsedto{
        const changemoney : moneyresponsedto = new moneyresponsedto();
        if(money.country==='한국')
        {
            changemoney.money=money.money/10;
            changemoney.moneytype='엔화';
        }
        else
        {
            changemoney.money=money.money*10;
            changemoney.moneytype='원';
        }
        return changemoney;
    }
    kcal(fitness:fitnessrequestdto):fitnessresponesdto{
        const kcal:fitnessresponesdto = new fitnessresponesdto();
        if(fitness.fitness_name==='팔굽혀펴기')
        {
            kcal.burn_kcal=fitness.count*0.5;
        }
        if(fitness.fitness_name==='윗몸일으키기')
        {
            kcal.burn_kcal=fitness.count*0.2;
        }
        if(fitness.fitness_name==='스쿼트')
        {
            kcal.burn_kcal=fitness.count*0.5;
        }
        return kcal;
    }
}
