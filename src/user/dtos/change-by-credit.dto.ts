import { IsNumber } from "class-validator";

export class ChangeCreditByDto {
  @IsNumber()
  changeBy: number;
}
