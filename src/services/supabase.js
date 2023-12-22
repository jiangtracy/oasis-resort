import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bxchwxuxyghqqqpaprgg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Y2h3eHV4eWdocXFxcGFwcmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMDE3OTIsImV4cCI6MjAxODc3Nzc5Mn0.WF0ZXLXt-GI_ncS4rktaelGUEfRph6i50I5hhyUwwX4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
