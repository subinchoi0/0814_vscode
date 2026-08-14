const fs = require('fs');
const path = require('path');

// 환경변수 읽기
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// HTML 파일 읽기
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

// placeholder 대체
html = html.replace('__SUPABASE_URL__', supabaseUrl);
html = html.replace('__SUPABASE_ANON_KEY__', supabaseAnonKey);

// 빌드된 HTML 저장 (또는 그대로 출력)
console.log('✓ Environment variables injected successfully');
