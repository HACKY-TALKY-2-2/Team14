import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const port = 3000;
const app = express();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

