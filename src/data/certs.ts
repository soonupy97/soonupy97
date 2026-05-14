export type Cert = {
  name: string
  issuer: string
  year: string
}

export const certs: Cert[] = [
  { name: '컴퓨터활용능력 2급', issuer: '한국산업인력공단', year: '2022.08' },
  { name: 'GTQ 일러스트 1급', issuer: '한국생산성본부', year: '2020.12' },
  { name: 'ITQ Master', issuer: '한국생산성본부', year: '2020.11' },
  { name: 'GTQ 포토샵 1급', issuer: '한국생산성본부', year: '2020.02' },
  { name: '컴퓨터그래픽스운용기능사', issuer: '한국산업인력공단', year: '2015.07' },
]
