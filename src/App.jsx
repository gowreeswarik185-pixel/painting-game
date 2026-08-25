import { useEffect, useRef, useState } from 'react'

const colors = ['#f6c445', '#3b82f6', '#35b66a', '#f06265', '#9a62dd', '#f28c3d']
const names = ['Sunshine', 'Ocean', 'Leaf', 'Coral', 'Violet', 'Orange']
const demo = [1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 3, 3, 4, 4, 3, 3, 3, 4, 5, 5, 4, 3, 6, 6, 5, 5, 6, 6, 6, 1, 2, 3, 4, 5]
const time = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`

export default function App() {
  const upload = useRef(null)
  const [board, setBoard] = useState(demo)
  const [filled, setFilled] = useState([])
  const [selected, setSelected] = useState(1)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [active, setActive] = useState(true)
  const [image, setImage] = useState('')
  const [notice, setNotice] = useState('Choose a color, then click a matching numbered region.')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active || done) return undefined
    const id = setInterval(() => setSeconds((value) => value + 1), 1000)
    return () => clearInterval(id)
  }, [active, done])

  const start = (nextBoard = demo) => {
    setBoard(nextBoard); setFilled([]); setScore(0); setSeconds(0); setDone(false); setActive(true)
    setNotice('Game on! Fill every region with its matching palette color.')
  }

  const play = (index) => {
    if (filled.includes(index) || done) return
    if (board[index] !== selected) {
      setScore((value) => Math.max(0, value - 5)); setNotice(`Wrong color — this region is number ${board[index]}.`); return
    }
    const next = [...filled, index]
    setFilled(next); setScore((value) => value + 10); setNotice('Perfect match!')
    if (next.length === board.length) {
      setDone(true); setActive(false); localStorage.setItem('paint-escape-best', String(score + 10))
      setNotice(`Picture complete! ${score + 10} points in ${time(seconds)}.`)
    }
  }

  const hint = () => {
    const index = board.findIndex((value, cell) => value === selected && !filled.includes(cell))
    if (index < 0) return setNotice('That color is complete — choose another one.')
    setNotice(`Hint: the glowing region is number ${selected}.`)
    document.querySelector(`[data-cell="${index}"]`)?.classList.add('hint')
    setTimeout(() => document.querySelector(`[data-cell="${index}"]`)?.classList.remove('hint'), 1500)
  }

  const onUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => { setImage(reader.result); start(demo.map((value, index) => ((value + index) % 6) + 1)) }
    reader.readAsDataURL(file)
  }

  const download = () => {
    const canvas = document.createElement('canvas'); const context = canvas.getContext('2d'); const size = 80
    canvas.width = canvas.height = size * 6
    board.forEach((number, index) => {
      const x = index % 6 * size; const y = Math.floor(index / 6) * size
      context.fillStyle = filled.includes(index) ? colors[number - 1] : '#fff'; context.fillRect(x, y, size, size)
      context.strokeStyle = '#18213a'; context.lineWidth = 2; context.strokeRect(x, y, size, size)
      if (!filled.includes(index)) { context.fillStyle = '#18213a'; context.font = 'bold 25px sans-serif'; context.textAlign = 'center'; context.textBaseline = 'middle'; context.fillText(number, x + size / 2, y + size / 2) }
    })
    const link = document.createElement('a'); link.href = canvas.toDataURL('image/png'); link.download = 'paint-and-escape.png'; link.click()
  }

  return <main className="game-shell">
    <header><div><small>COLOR BY NUMBER</small><h1>🎨 PAINT &amp; ESCAPE</h1><p>Turn your picture into a colorful challenge.</p></div><div className="actions"><button className="secondary" onClick={() => upload.current?.click()}>📸 Upload image</button><button onClick={() => { setImage(''); start() }}>🎮 Play demo</button><input ref={upload} type="file" accept="image/png,image/jpeg,image/webp" onChange={onUpload} hidden /></div></header>
    <section className="stats"><div>Score <b>{score}</b></div><div>Progress <b>{Math.round(filled.length / board.length * 100)}%</b></div><div>Time <b>{time(seconds)}</b></div></section>
    <section className="play-area"><article className="panel"><div className="heading"><h2>{image ? 'Your converted picture' : 'Demo coloring page'}</h2><button className="hint-button" onClick={hint}>💡 Hint</button></div>{image && <img className="preview" src={image} alt="Your uploaded image" />}<div className="board">{board.map((number, index) => <button key={index} data-cell={index} className={filled.includes(index) ? 'filled' : ''} onClick={() => play(index)} style={{ '--color': colors[number - 1] }}>{filled.includes(index) ? '' : number}</button>)}</div><p className="notice">{notice}</p></article>
      <aside className="panel palette"><h2>Pick a color</h2><p>Select a number, then fill its matching regions.</p>{colors.map((color, index) => <button key={color} className={selected === index + 1 ? 'selected' : ''} onClick={() => setSelected(index + 1)}><span style={{ background: color }}>{index + 1}</span>{names[index]}</button>)}<div className="progress"><i style={{ width: `${filled.length / board.length * 100}%` }} /></div><button onClick={download}>⬇ Download artwork</button></aside></section>
    {done && <div className="modal"><div><small>✨ MASTERPIECE COMPLETE</small><h2>Great painting!</h2><p>{score} points · {time(seconds)}</p><button onClick={() => start()}>Play again</button></div></div>}
  </main>
}
