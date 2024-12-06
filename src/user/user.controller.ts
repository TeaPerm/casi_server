import { Controller, Get, Inject, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { UserService } from "./user.service";
import { UserDetailRequest } from "src/types/userdetail-request.type";

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
}
