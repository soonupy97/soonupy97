export type Cert = {
  name: string
  issuer: string
  year: string
}

export const certs: Cert[] = [
  { name: '웹디자인기능사', issuer: '한국산업인력공단', year: '2019' },
  { name: '컴퓨터그래픽스운용기능사', issuer: '한국산업인력공단', year: '2018' },
  { name: 'GTQ 그래픽기술자격 1급', issuer: '한국생산성본부', year: '2020' },
]
