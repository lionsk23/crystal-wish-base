/** @jsxImportSource frog/jsx */
import { Button, Frog } from 'frog'
import { handle } from 'frog/next'

const app = new Frog({
    basePath: '/api',
    title: 'Base Daily Wish',
})

const wishes = [
    "Сегодня твой портфель вырастет на 10%! 🚀",
    "Твоя транзакция пройдет с минимальным газом. ⛽",
    "Ты найдешь гем, который даст 100 иксов! 💎",
    "Хорошего дня и только профитных сделок! 📈",
    "Твой код скомпилируется с первого раза! 💻",
    "Ты получишь ретродроп, о котором давно мечтал. 🎁",
    "Base — это база. Твой день будет отличным! 🔵",
    "Сегодня идеальный день для минта крутой NFT. 🎨",
    "Удача на твоей стороне, делай свой ход! 🎲"
]

app.frame('/', (c) => {
    return c.res({
        image: (
            <div style={{
                alignItems: 'center',
                background: 'linear-gradient(to right, #0052FF, #4D8BFF)',
                backgroundSize: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                height: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
            }}>
                <div style={{
                    color: 'white',
                    fontSize: 60,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 30,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}>
                    ✨ Base Daily Wish ✨
                </div>
                <div style={{ color: 'white', fontSize: 30, marginTop: 20 }}>
                    Нажми на кнопку, чтобы получить предсказание на день!
                </div>
            </div>
        ),
        intents: [
            <Button action="/wish">Получить пожелание</Button>,
        ],
    })
})

app.frame('/wish', (c) => {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)]
    return c.res({
        image: (
            <div style={{
                alignItems: 'center',
                background: 'linear-gradient(to right, #0052FF, #4D8BFF)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
            }}>
                <div style={{
                    color: 'white',
                    fontSize: 40,
                    padding: '0 80px',
                }}>
                    {randomWish}
                </div>
            </div>
        ),
        intents: [
            <Button.Reset>Назад</Button.Reset>,
            <Button.Link href="https://warpcast.com/~/compose?text=I got my Base Daily Wish! ✨">Поделиться</Button.Link>
        ],
    })
})

export const GET = handle(app)
export const POST = handle(app)
