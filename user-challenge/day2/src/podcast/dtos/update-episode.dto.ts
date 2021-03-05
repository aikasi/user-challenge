import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateEpisodeDto {
  @Field(() => String)
  title?: string;
  @Field(() => String)
  category?: string;
  @Field(() => Number)
  rating?: number;
}
