import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "./guards/auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  asd(@Req() req) {
    return { message: "hello" };
  }

  @UseGuards(AuthGuard)
  @Post()
  SomeProtectedRoute(@Req() req) {
    return { message: "Hella secret stuff", req: req.userId };
  }
}
