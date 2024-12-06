import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/database";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [{ useClass: UserService, provide: "USER_SERVICE" }],
  exports: [{ useClass: UserService, provide: "USER_SERVICE" }],
})
export class UserModule {}
