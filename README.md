# Korean Learner's English Dictionary

This is the source code for the Korean Learner's English Dictionary (**KLED**). KLED is based upon the [Korean-English Learner's Dictionary](https://krdict.korean.go.kr/eng/mainAction?nation=eng) of the National Institute of Korean Language. The dictionary itself offers more than 52.000 entries covering words, inflections of certain verbs and adjectives, proverbs, ideoms and more. The underlying data belongs to the respective owners and was collected by the National Institute of Korean Language. The dictionary is licenced under the Creative Commons Attribution - Share Alike License. For details please refer to their website.

## Motivation

I started this project initially for two reasons:

1. The dictionary is not distributed over a CDN and thus load times can at times be quite lengthy (to wait multiple seconds just for one page to finish loading is not uncommon) especially when you are located outside of South Korea. When studying Korean and looking multiple words up consecutively this can slow down productivity pretty fast.

2. I believe that studying vocabulary through [spaced repetetion](https://en.wikipedia.org/wiki/Spaced_repetition) is - especially as a beginner or intermediate learner - incredible useful when learning a foreign language. There is lots of helpful software out there that implements spaced repetition. My favourite one is [Anki](https://apps.ankiweb.net/) which is a flashcard based spaced repetition system. Creating Anki flashcards by hand is incredibly tiresome and unproductive. To automate the process to study Korean I decided to write and set up my own dictionary website which allows generating of flashcards automatically.

## Differences to the Original Korean-English Learners Dictionary

As KLED is entirely based upon the original version of the National Insitute of Korean language the underlying data does - excempt for some corrections I made to certain wrong entries during development - not differ at all. The main differences are the ones highlighted above. 
As this application is deployed on Vercel and thus over a CDN loading times are noticeably faster (Though if you are located in Korea the original one may at times be faster; but from experience loading times seem to vary quite remarkelby on a day-to-day basis.).

## To-DOs

- [ ] Adopt Typscript and convert files to .ts/.tsx
- [ ] Create a table for proverbs and ideoms (backend)
- [✅] Rewrite search to get elements from backend and discard dictionary files

