import { writeFile } from 'node:fs/promises'
import { parse } from 'parse5'

const sourceUrl = 'https://naturalaceh.org/'
const response = await fetch(sourceUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })

if (!response.ok) {
  throw new Error(`Could not fetch Natural Aceh navigation: ${response.status}`)
}

const document = parse(await response.text())

function getAttribute(node, name) {
  return node.attrs?.find(attribute => attribute.name === name)?.value
}

function findNode(node, predicate) {
  if (predicate(node)) return node
  for (const child of node.childNodes ?? []) {
    const result = findNode(child, predicate)
    if (result) return result
  }
}

function getText(node) {
  if (node.nodeName === '#text') return node.value
  return (node.childNodes ?? []).map(getText).join('')
}

function extractItems(list) {
  return (list.childNodes ?? [])
    .filter(node => node.tagName === 'li')
    .map(item => {
      const anchor = item.childNodes?.find(node => node.tagName === 'a')
      const childList = item.childNodes?.find(node => node.tagName === 'ul')
      return {
        label: getText(anchor).trim(),
        url: getAttribute(anchor, 'href'),
        children: childList ? extractItems(childList) : []
      }
    })
    .filter(item => item.label && item.url)
}

function takeChildren(item, predicate) {
  const picked = item.children.filter(predicate)
  item.children = item.children.filter(child => !predicate(child))
  return picked
}

function collectUrls(items) {
  return items.flatMap(item => [item.url, ...collectUrls(item.children ?? [])]).filter(Boolean).sort()
}

const menu = findNode(document, node => node.tagName === 'ul' && getAttribute(node, 'id') === 'menu-home')

if (!menu) {
  throw new Error('Could not find the #menu-home navigation on Natural Aceh')
}

const sourceItems = extractItems(menu)
const sourceUrls = collectUrls(sourceItems)
const byLabel = label => sourceItems.find(item => item.label.toLowerCase() === label.toLowerCase())
const wps = byLabel('WPS Program')
const livelihood = byLabel('Livelihood Program')
const sdgs = byLabel('SDGs Program')
const submit = byLabel('Submit')
const conservation = byLabel('Conservation')
const login = byLabel('Login')
const books = byLabel('Books')

if ([wps, livelihood, sdgs, submit, conservation, login, books].some(item => !item)) {
  throw new Error('The source menu changed. Update the navigation grouping before saving it.')
}

const stories = takeChildren(livelihood, item => ['our activities', 'achievements', 'news', 'video'].includes(item.label.toLowerCase()))
const participation = takeChildren(submit, item => ['partnership', 'social enterprise', 'intern', 'career'].includes(item.label.toLowerCase()))

const items = [
  { key: 'programs', label: 'Programs', labelId: 'Program', children: [wps, livelihood, sdgs, conservation] },
  { key: 'stories', label: 'Stories', labelId: 'Berita & cerita', children: stories },
  { key: 'participate', label: 'Get involved', labelId: 'Berpartisipasi', children: [submit, ...participation] },
  { key: 'resources', label: 'Resources', labelId: 'Sumber daya', children: [books, login] }
]

if (JSON.stringify(sourceUrls) !== JSON.stringify(collectUrls(items))) {
  throw new Error('Grouped navigation does not preserve every source URL.')
}

await writeFile('app/data/navigation.json', `${JSON.stringify({ sourceUrl, scrapedAt: new Date().toISOString(), items }, null, 2)}\n`)
console.log(`Saved ${items.length} compact menu groups with all ${collectUrls(items).length} source URLs to app/data/navigation.json`)
