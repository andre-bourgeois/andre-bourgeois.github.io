// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lftdypsuvyjavhgxdnqk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdGR5cHN1dnlqYXZoZ3hkbnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5ODUyNjksImV4cCI6MjA2NDU2MTI2OX0.A-QXFK-JHj2OpvAv0H2uRZOo-3lX5MMSDQx3_IHbfJU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);