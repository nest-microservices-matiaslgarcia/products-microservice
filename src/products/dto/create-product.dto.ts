import { Type } from "class-transformer";
import { IsString, IsNumber, IsPositive, Min } from "class-validator";

export class CreateProductDto {


    @IsString()
    public name: string;

    @IsString()
    public description: string;


    @IsNumber({
        maxDecimalPlaces: 4,
    })
    @Min(0)
    @Type(() => Number)
    public price: number;
}
