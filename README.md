# AI Multimedia Cost Calculator

A comprehensive pricing calculator for AI multimedia generation APIs across text, image, video, avatar, and voice modalities.

Demo: https://nick227.github.io/api-cost-calculator/

## 🚀 Features

- **18 Providers** across 5 modalities
- **Real-time pricing** with quality/size multipliers
- **Side-by-side comparison** of all providers
- **Accurate late-2025 pricing** with sources
- **Clean modular architecture** (all files < 200 lines)

---

## 📊 Supported Providers

### Text Generation (4)
- OpenAI (GPT-5), Google Gemini (2.5 Pro), Grok (xAI), OpenRouter

### Image Generation (6)
- Dezgo, Fal.ai, Google Gemini, OpenAI, OpenRouter, Grok

### Video Generation (6)
- Pika Labs, Fal.ai, Luma AI, Runway, Sora ⚠️ (no API), Google Gemini

### Avatar Videos (7) ✨
- A2E, Hedra, HeyGen, Tavus, D-ID, Colossyan, Synthesia

### Voice Synthesis (1)
- ElevenLabs

---

## 💻 Usage

1. Open `index.html` in a web browser
2. Set image count and pipeline options
3. Adjust quality settings (resolution, duration, model tier)
4. Select providers to compare
5. View real-time cost estimates

---

## 🎯 Pricing Ranges

| Modality | Cheapest | Most Expensive | Difference |
|----------|----------|----------------|------------|
| Text | Grok: $0.00035/1K | GPT-5: $0.0055/1K | 15x |
| Image | Dezgo: $0.0019 | Grok: $0.07 | 37x |
| Video | Pika: $0.06/s | Gemini: $0.15/s | 2.5x |
| Avatar | A2E: $0.10/min | Synthesia: $0.50/min | 5x |
| Voice | ElevenLabs: $0.18/1K chars | - | - |

---

## 📁 File Structure

```
ai-costs/
├── index.html
├── app/
│   └── main.js
├── data/
│   ├── constants.js
│   ├── pricingTiers.js
│   ├── providers.js
│   ├── providersList.js
│   └── providers/
│       ├── textProviders.js
│       ├── imageProviders.js
│       ├── videoProviders.js
│       ├── avatarProviders.js
│       └── voiceProviders.js
├── models/
│   └── PricingTableModel.js
├── ui/
│   ├── leftPanel.js
│   ├── qualitySettings.js
│   ├── modalityTable.js
│   └── summaryCard.js
├── utils/
│   └── usageCalculator.js
└── styles/
    ├── variables.css
    ├── base.css
    ├── leftPanel.css
    ├── rightPanel.css
    ├── qualitySettings.css
    └── table.css
```

---

## ⚙️ Quality Settings

### Text Models
- Fast (GPT-4o-mini/Flash): 0.05x multiplier
- Balanced (GPT-5/Gemini 2.5 Pro): 1.0x
- Advanced (o3/o3-mini): 2.5x

### Image Options
- **Resolution:** 512×512 (0.5x), 1024×1024 (1.0x), 1024×1792 (1.5x), 1792×1024 (1.5x)
- **Quality:** Standard (1.0x), HD (2.0x)

### Video Duration
- 5s, 10s, 30s, 60s

### Avatar Duration
- 15s, 30s, 60s, 120s

### Voice Quality
- Standard (1.0x), Turbo (0.65x), Multilingual (1.3x)

---

## ⚠️ Important Notes

- **Pricing is approximate** - Always verify with official provider docs
- **Text pricing** uses blended input/output averages
- **OpenAI Sora** has NO API access (ChatGPT Plus/Pro only)
- **Some estimates pending** official API pricing confirmation
- Last updated: **December 2, 2025**

---

## 📚 Documentation

- `MIGRATION_SUMMARY.md` - How we refactored from monolithic to modular
- `OPTIMIZATION_SUMMARY.md` - Performance improvements applied
- `FINAL_REVIEW_SUMMARY.md` - Bug fixes and security
- `PRICING_CORRECTIONS_DEC2025.md` - Pricing accuracy corrections
- `FINAL_INTEGRATION_SUMMARY.md` - Complete provider integration details

---

## 🛠️ Tech Stack

- **Vanilla JavaScript** (ES6 modules)
- **CSS3** (CSS custom properties)
- **No frameworks** - Pure web standards
- **No build process** - Direct browser execution

---

## 📖 Sources

- [OpenAI Pricing](https://platform.openai.com/docs/pricing)
- [Google AI Pricing](https://ai.google.dev/pricing)
- [xAI Grok Docs](https://docs.x.ai/docs/models)
- [Fal.ai Pricing](https://fal.ai/pricing)
- [Runway Pricing](https://runwayml.com/pricing)
- [ElevenLabs Pricing](https://elevenlabs.io/pricing)
- Various avatar provider documentation

---

## 📄 License

MIT License - Use freely in your projects

---

## 🙏 Credits

Built with attention to code quality, performance, and user experience.
All pricing researched from official provider documentation.

Last updated: December 2, 2025

