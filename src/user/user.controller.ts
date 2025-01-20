import {
  Controller,
  Get,
  Inject,
  Req,
  Post,
  UseGuards,
  Body,
} from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { UserService } from "./user.service";
import { UserDetailRequest } from "src/types/userdetail-request.type";
import { ChangeCreditByDto } from "./dtos/change-by-credit.dto";

@Controller("user")
export class UserController {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  GetUserDetails(@Req() req: UserDetailRequest) {
    return this.userService.findUserDetails(req.userId);
  }

  @UseGuards(AuthGuard)
  @Post("change-credit")
  ChangeUserCredit(
    @Req() req: UserDetailRequest,
    @Body() body: ChangeCreditByDto,
  ) {
    return this.userService.changeCredit(req.userId, body.changeBy);
  }
}
