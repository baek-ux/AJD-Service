// Supabase 클라이언트 (연결 지점)
//
// 데모 단계에서는 실제 호출 없이 mock 인증(AuthContext)을 사용합니다.
// 실제 운영으로 전환할 때 아래 주석을 해제하고 환경변수를 채우면 됩니다.
//
// import { createClient } from "@supabase/supabase-js";
// export const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

export const supabase = null; // 데모: 미연결
