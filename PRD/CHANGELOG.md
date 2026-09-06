# Changelog · ai-landing-specialist PRD

所有 PRD / SPEC 變更記錄於此。最新在上。

---

## [v3.0.2] · 2026-09-07 · fleet-upgrade

### Added（新增）
- **首次建立完整 PRD v3.0.2**（既無 v1/v2/v3 PRD，本次從零建立 9 章規格書）
- §A 部署契約（Fleet 規格，8 個子節）
  - §A.1 部署目標表（Pages + Vercel 雙軌）
  - §A.2 4 個靜態入口檔案清單
  - §A.3 連結檢查結果表（0 失效）
  - §A.4 GHA Workflow 觸發說明
  - §A.5 環境變數表（無 server-side secret）
  - §A.6 部署後驗證 checklist
  - §A.7 雙軌說明（Pages 靜態 + Vercel 既有產線）
  - §A.8 URL 對照（Pages + Vercel + Notion + GitHub）
- 版本號 v3.0.2（fleet 統一規格）
- 標頭加入 fleet-upgrade 標記 + 部署目標明確為 GitHub Pages

### Changed（變更）
- 升級對齊 SPEC v3.0 契約（fleet 統一規格）
- 部署目標從 Vercel 單軌 → **Pages（靜態）+ Vercel（既有產線）雙軌**
- GHA workflow 新增 Pages 自動部署（4 jobs: lint / test / build / deploy）
- 既有 STATUS.md 保留（設計演進 v1-v4 歷史記錄），不刪除

### Status
- 4 個靜態檔案：✅ all served
- 內部連結：✅ 0 失效
- 雙軌部署：✅ Pages（靜態）+ Vercel（既有產線 HTTP 200）並存
- GHA: ✅ ci.yml 建立（4 jobs, 靜態 Pages deploy）

---

## [v4.0] · 2026-08-16 · 設計 v4 純白 + 紫藍 + Inter 定案

### Changed
- 設計 v3 燒赭 #C2410C + Fraunces（Sean 撤回）
- 設計 v4 純白 #FFFFFF + 紫藍 #5B5BD6 + Inter ✅
- 與 Stripe / Linear / Vercel 風格對齊（SaaS 母語）

### Status
- Commit SHA: `8e0625e3ff0a006146c7222c1afe6d798f2c1794`
- Vercel HTTP 200
- Notion 14 個 properties 全部填好
- 三方對齊：✅ Local == GitHub == Notion

---

## [v3.0] · 2026-08-15 · frontend-design: 燒赭 + Fraunces

### Changed
- 設計 v3 嘗試：燒赭 #C2410C + Fraunces
- 最終由 Sean 撤回（v4 覆蓋）

---

## [v2.0] · 2026-08-14 · UI/UX Pro Max: 海軍藍 + EB Garamond

### Changed
- 設計 v2：海軍藍 #0F172A + EB Garamond
- 偏古典印刷感

---

## [v1.0] · 2026-08-13 · init: 紫粉漸層 + emoji

### Added
- AI 落地師 Landing Page 初始版本
- 紫粉漸層 + emoji 圖示
- Tailwind CDN utilities
- Vercel CLI 部署（本機 ZIP）
