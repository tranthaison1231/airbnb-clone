export interface Category {
  id: string
  name: string
  icon: string
}

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch('https://airbnb-clone-server-ten.vercel.app/api/categories')
  const categories = await res.json()
  return categories
}
