export async function getItemsAPI() {
  try {
    const response = await fetch(
      'https://guarded-river-49993.herokuapp.com/items'
    )
    return response.json()
  } catch (error) {
    return new Error(error)
  }
}
