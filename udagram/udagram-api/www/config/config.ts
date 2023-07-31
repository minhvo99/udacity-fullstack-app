import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbPort: Number(process.env.DB_PORT),
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_region: process.env.AWS_REGION,
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_profile: process.env.AWS_PROFILE,
  // eslint-disable-next-line @typescript-eslint/camelcase
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};