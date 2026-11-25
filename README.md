# Meme Sprint 3: AI Agent Goes Rogue — v2

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Wahyupurnomoaji21/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6-v2/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Wahyupurnomoaji21/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6-v2/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

## Konsep v2 — "The Bug Is Me"

Bukan robot resign yang jinak. Di v2 ini, AI agent-nya membalik meja: ia **melaporkan user-nya sendiri sebagai bug**. Robot kecil berbulu duduk serius di meja kantor mengetik laporan bug di laptop — layarnya jelas menampilkan **"BUG #001: THE HUMAN"** (Severity: High, Status: OPEN) — sementara si manusia berdiri di belakang dengan cangkir kopi, bingung setengah mati.

Teks meme (2 baris, huruf besar, terbaca dalam satu lirikan):

> **MY AI AGENT FILED A BUG REPORT.**
> **THE BUG IS ME.**

Jokenya langsung kebaca tanpa penjelasan: yang "rusak" ternyata manusianya sendiri. Gambar fotorealistis 3D seperti foto asli — bukan flat vector/kartun.

## Cara jalan

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22) hanya menyalin `meme.png` byte-for-byte ke `$MAKEFUN_OUTPUT_DIR/entry.png` (fallback `/output`), lalu memverifikasi sendiri bahwa hasil salinannya byte-identical (sha256 sama). Tanpa network, tanpa secrets.
