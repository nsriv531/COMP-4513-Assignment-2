import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vjcozmwsmwuefqcsksyd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY296bXdzbXd1ZWZxY3Nrc3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0Njk1ODQsImV4cCI6MjAyNDA0NTU4NH0.1FN-0iQ7q6kqZ_aFzuBnAbSoLPHJ-WKGfovTLWN9nmc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;