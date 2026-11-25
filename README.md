# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/toirant/u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/toirant/u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)

Entry for the [One Line, One Laugh](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3) bounty on make.fun.

## The entry

`main.ts` writes a single funny line — a joke, a quip, a punchy
observation — to `/output/entry.txt`. The line is the whole entry: at most
200 characters, one line, no explanation, no setup longer than the punchline
needs.

> I put 'fluent in sarcasm' on my résumé. The interviewer asked if I could translate it into teamwork.

## How it works

Run it with Node 22:

```sh
node main.ts
```

It creates `/output` if needed, writes the line to `/output/entry.txt`, then
validates what was actually written: valid UTF-8 (byte-level round-trip),
1–200 characters, a single line, not whitespace-only, and free of control
characters. It never deletes `/output`.

## License

MIT — see [LICENSE](LICENSE).
