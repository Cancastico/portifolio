
export interface Post{
  type:'image'|'title'|'paragraph'|'subtitle'|'code',
  content: string | File | null
}
