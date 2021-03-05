import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateEpisodeDto {
  @Field(() => String, { nullable: true })
  title?: string;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => Number, { nullable: true })
  rating?: number;
}
