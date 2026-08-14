# 🎰 로또 추첨기 with Supabase

## 개요
로또 번호를 무작위로 추첨하고, Supabase DB에 추첨 이력을 저장하는 웹 애플리케이션입니다.

## 기능
- ✅ 로또 번호 추첨 (1~45 중 6개 + 보너스 1개)
- ✅ 추첨 이력을 Supabase DB에 자동 저장
- ✅ 로컬 스토리지 백업
- ✅ 애니메이션 효과
- ✅ Vercel 환경변수 지원

## Supabase 설정

### 1. 프로젝트 생성
1. [Supabase](https://app.supabase.com) 접속
2. "New Project" 클릭
3. 프로젝트 이름: `lottery-picker` (또는 원하는 이름)
4. 비밀번호 설정 후 생성

### 2. 데이터베이스 테이블 생성
1. Supabase 대시보드의 **"SQL Editor"** 클릭
2. **"New Query"** 클릭
3. 다음 SQL 실행:

```sql
CREATE TABLE lottery_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numbers TEXT NOT NULL,
  bonus INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE lottery_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous access" ON lottery_history
  FOR ALL USING (true) WITH CHECK (true);
```

### 3. API 키 복사
1. Settings > API 클릭
2. 다음 정보 복사:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon key** (NEXT_PUBLIC_SUPABASE_ANON_KEY)

## Vercel 배포

### 1. 환경변수 설정
Vercel 프로젝트 Settings > Environment Variables에 추가:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 2. 배포
```bash
git push origin main
```

## 로컬 개발

```bash
# 환경변수 설정
cp .env.example .env.local
# .env.local 파일 수정하여 Supabase 정보 입력

# 개발 서버 실행
npm run dev
# http://localhost:3000 에서 확인
```

## 파일 구조
```
.
├── index.html          # 메인 애플리케이션
├── package.json        # 프로젝트 메타데이터
├── build.js           # 빌드 스크립트 (환경변수 주입)
├── .env.example       # 환경변수 예제
├── .gitignore         # Git 무시 파일
└── README.md          # 이 파일
```

## 기술 스택
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Supabase (PostgreSQL)
- Deployment: Vercel
- Database Client: Supabase JS SDK

## 라이센스
MIT
