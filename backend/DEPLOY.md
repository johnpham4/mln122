# Hướng dẫn Deploy Backend lên Vercel

## 1. Cài đặt Vercel CLI
npm install -g vercel

## 2. Login vào Vercel
npx vercel login

## 3. Deploy backend
cd backend
npx vercel --prod

# name: mln122-backend

## 4. Test sau khi deploy
# GET: https://mln122-backend.vercel.app/
# POST: https://mln122-backend.vercel.app/api/chat
# POST: https://mln122-backend.vercel.app/api/chat/stream

## 5. Nếu có lỗi, check logs:
npx vercel logs [deployment-url]

## 6. Update frontend config
Sau khi deploy thành công, cập nhật URL trong:
- src/config/environment.js
- Thay https://mln122-backend.vercel.app bằng URL thực tế

## 7. Deploy frontend
cd ..
npx vercel --prod
